import React, {useEffect, useRef, useState} from 'react';
import Button, { TButtonType, IButtonProps } from '../button/button';
import useForwardRef from '../hooks/useForwardRef';
import './styles.scss'
import cx from 'classnames';

export interface IDropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
    id?: string
    label: string;
    href?: string;
    color?: 'employee' | 'default'
    isActive?: boolean;
    isHovered?: boolean;
    disabled?: boolean
}

export interface IDropdownProps<ButtonType = TButtonType> {
    id: string;
    items: IDropdownItemProps[];
    button: IButtonProps<ButtonType>;
    className?: string;
}

const Dropdown = React.forwardRef<HTMLButtonElement, IDropdownProps>((props,  ref) => {
    const dropRef = useForwardRef<HTMLButtonElement>(ref);
    const menuRef = useRef<any>(null);

    const [open, setOpen] = useState(false);
    const [x, setX] = useState<number | undefined>()
    const [y, setY] = useState<number | undefined>()

    useEffect(() => {
        getPosition()
        window.addEventListener('resize', getPosition)
    }, [dropRef])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropRef.current && dropRef.current.contains(event.target as Node)) {
                event.stopPropagation()
            }
            else {
                if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                    setOpen(!open)
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    const listItems = props.items.map((item) => {
        const dropDownItem = cx({
            [`${item.color ? 'dropdown__item--employee' : 'dropdown__item'}`]: true,
            'disabled': item.disabled,
        })

        const dropDownAnchor = cx({
            [`${item.color ? 'dropdown__anchor--employee' : 'dropdown__anchor'}`]: true,
            'is-hovered': item.isHovered,
            'is-active': item.isActive,
        })

        const dropDownLabel = cx({
            [`${item.color ? 'dropdown__label--employee' : 'dropdown__label'}`]: true,
        })
        return (
            <li className={dropDownItem}>
                <a className={dropDownAnchor} href={item.href}>
                    <span className={dropDownLabel}>{item.label}</span>
                </a>
            </li>
        )
    });

    const getPosition = () => {
        const x = dropRef.current?.offsetLeft;
        setX(x);

        const y = dropRef.current?.offsetTop + dropRef.current?.offsetHeight;
        setY(y);
    }

    return (
        <>
            <Button
                text={props.button.text}
                type={props.button.type}
                onClick={() => setOpen(!open)}
                icon={props.button.icon}
                ariaLabel={props.button.ariaLabel}
                ariaExpanded={open}
                ariaControls={props.button.ariaControls}
                ref={dropRef}
            />
            {open && (
                <div className={'dropdown'} style={{transform: `translate3d(${x}px, ${y}px, 0px)`, inset: '0px auto auto 0px', zIndex: '21'}}>
                    <ul className={'dropdown__element'} ref={menuRef}>
                        {listItems}
                    </ul>
                </div>
            )}
        </>
    );
});

export default Dropdown