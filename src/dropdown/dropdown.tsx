import React, { useEffect, useState } from 'react';
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

    const listItems = props.items.map((item) => {
        const dropDownItem = cx({
            [`${item.color ? 'dropdown__item--employee' : 'dropdown__item'}`]: true,
            'disabled': item.disabled,
        })

        const dropDownAnchor = cx({
            [`${item.color ? 'dropdown__anchor--employee' : 'dropdown__anchor'}`]: true,
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

    const [x, setX] = useState<number | undefined>()
    const [y, setY] = useState<number | undefined>()
    const getPosition = () => {
        const x = dropRef.current?.offsetLeft;
        setX(x);

        const y = dropRef.current?.offsetTop + dropRef.current?.offsetHeight;
        setY(y);
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        getPosition()
        window.addEventListener('resize', getPosition)
    })

    return (
        <>
            <Button text={props.button.text} type={props.button.type} onClick={handleClick} ref={dropRef}/>
            {open && (
                <div className={'dropdown'} style={{transform: `translate3d(${x}px, ${y}px, 0px)`, inset: '0px auto auto 0px', zIndex: '21'}}>
                    <ul className={'dropdown__element'} id={props.id}>
                        {listItems}
                    </ul>
                </div>
            )}
        </>
    );
});

export default Dropdown