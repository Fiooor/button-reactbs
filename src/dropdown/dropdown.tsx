import React, {useEffect, useRef, useState} from "react";
import Button, { TButtonType, IButtonProps } from "../button/button";
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

const Dropdown = (props: IDropdownProps) => {

    const items = props.items;
    const { button } = props;
    const listItems = items.map((item) =>
    <li className={"dropdown-item"} id={"test"}>
        <a className={"dropdown-link"} href={item.href}>
            <span className={"dropdown-label"}>{item.label}</span>
        </a>
    </li>
    );

    const  [isOpen, setIsOpen] = useState(false);

    const dropRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState<number | undefined>();
    const [y, setY] = useState<number | undefined>();

    const getPosition = () => {
        const x = dropRef.current?.offsetLeft;
        setX(x);

        const y = dropRef.current?.offsetTop;
        setY(y);
    }

    const setPosition = () => {
        // @ts-ignore
        const calcX = (x - 67) // 1029.33 & 691
        // @ts-ignore
        const calcY = (y - 120)
        setIsOpen(!isOpen)

        const dropdown = document.querySelector("div.dropdown") as HTMLElement;
        if (dropdown) {
            console.log(dropdown)
            dropdown.setAttribute("style", "transform: translate3d(calc(466px - 0px), calc(30px + 48px), 0px); inset: 0px auto auto 0px; z-index: 21")
        } else {
            const observer = new MutationObserver(() => {
                const dropdown = document.querySelector("div.dropdown") as HTMLElement;
                if (dropdown) {
                    observer.disconnect()
                    console.log(dropdown)
                    // X values needs to be adjusted, Y is fine
                    dropdown.setAttribute("style", "transform: translate3d(calc(466px - 0px), calc(30px + 48px), 0px); inset: 0px auto auto 0px; z-index: 21")
                }
            });
            observer.observe(document, {subtree: true, childList: true });
        }
    }

    useEffect(() => {
        getPosition();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", getPosition);
    }, []);

    return (
        <>
            <Button text={button.text} type={button.type} onClick={setPosition} ref={dropRef}/>
            {isOpen && (
                <div className={"dropdown"}>
                    <ul className={"dropdown__element"} id={props.id}>
                        {listItems}
                        {x ?? "No"}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Dropdown