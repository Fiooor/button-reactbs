import React, {useEffect, useState} from "react";
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

    const items = props.items;
    const { button } = props;
    const listItems = items.map((item) =>
    <li className={"dropdown-item"} id={"test"}>
        <a className={"dropdown-link"} href={item.href}>
            <span className={"dropdown-label"}>{item.label}</span>
        </a>
    </li>
    );

    const dropRef = useForwardRef<HTMLButtonElement>(ref);
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState<number | undefined>();
    const [y, setY] = useState<number | undefined>();
    const [h, setH] = useState<number | undefined>()

    const setPosition = () => {
        setIsOpen(!isOpen)
        const dropdown = document.querySelector("div.dropdown") as HTMLElement;
        if (dropdown) {
            console.log(dropdown)
            dropdown.setAttribute("style", `transform: translate3d(${x}px, ${h}px, 0px); inset: 0px auto auto 0px; z-index: 21`)
        } else {
            const observer = new MutationObserver(() => {
                const dropdown = document.querySelector("div.dropdown") as HTMLElement;
                if (dropdown) {
                    observer.disconnect()
                    console.log(dropdown)
                    // X - Btn left | Y - Btn top + Btn height | Z - unnecessary
                    dropdown.setAttribute("style", `transform: translate3d(${x}px, ${h}px, 0px); inset: 0px auto auto 0px; z-index: 21`)
                }
            });
            observer.observe(document, {subtree: true, childList: true });
        }
    }

    useEffect(() => {
        setPosition();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", setPosition);
    }, []);

    useEffect(() => {
        const x = dropRef.current?.offsetLeft;
        setX(x);

        const y = dropRef.current?.offsetTop;
        setY(y);

        const h = dropRef.current?.clientHeight + y;
        setH(h);
    })

    return (
        <>
            <Button text={button.text} type={button.type} onClick={setPosition} ref={dropRef}/>
            {isOpen && (
                <div className={"dropdown"}>
                    <ul className={"dropdown__element"} id={props.id}>
                        {listItems}
                        {x ?? "No "}
                        {y ?? "No "}
                        {h ?? "No "}
                    </ul>
                </div>
            )}
        </>
    );
});

export default Dropdown