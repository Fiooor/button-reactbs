import React, { useEffect, useState } from "react";
import Button, { TButtonType, IButtonProps } from "../button/button";
import useForwardRef from "../hooks/useForwardRef";
import './styles.scss'

export interface IDropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
    id?: string
    label: string;
    href?: string;
}

export interface IDropdownProps<ButtonType = TButtonType> {
    id: string;
    items: IDropdownItemProps[];
    button: IButtonProps<ButtonType>;
    className?: string;
}

const Dropdown = React.forwardRef<HTMLButtonElement, IDropdownProps>((props, ref) => {
    const dropRef = useForwardRef<HTMLButtonElement>(ref);

    const listItems = props.items.map((item) =>
    <li className={"dropdown-item"} id={"test"}>
        <a className={"dropdown-link"} href={item.href}>
            <span className={"dropdown-label"}>{item.label}</span>
        </a>
    </li>
    );

    const [open, setOpen] = useState(false);
    const [x, setX] = useState<number | undefined>()
    const [y, setY] = useState<number | undefined>()
    const [h, setH] = useState<number | undefined>()

    const getPosition = () => {
        const x = dropRef.current?.offsetLeft;
        setX(x);

        const y = dropRef.current?.offsetTop;
        setY(y);

        const h = dropRef.current?.offsetHeight + y;
        setH(h);
    }

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        getPosition()
        window.addEventListener("resize", getPosition)
    })

    return (
        <>
            <Button text={props.button.text} type={props.button.type} onClick={handleClick} ref={dropRef}/>
            {open && (
                <div className={"dropdown"} style={{transform: `translate3d(${x}px, ${h}px, 0px)`, inset: "0px auto auto 0px", zIndex: "21"}}>
                    <ul className={"dropdown__element"} id={props.id}>
                        {listItems}
                    </ul>
                </div>
            )}
        </>
    );
});

export default Dropdown