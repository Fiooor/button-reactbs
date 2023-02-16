import * as React from "react";
import cx from 'classnames';
import './styles.scss'
import Icon, { IIconItemProps } from "../icon/icon";
export type TButtonType = 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline'

export interface IButtonProps<Type = TButtonType>{
    type?: Type;
    text?: string | number;
    onClick?: () => void;
    disabled?: boolean;
    icon?: IIconItemProps;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const btnClass = cx({
        'btn': true,
        'btn__primary': props.type === "primary",
        'btn__secondary': props.type === "secondary",
        'btn__primary--outline': props.type === "primary-outline",
        'btn__secondary--outline': props.type === "secondary-outline",
    });


    return (
        <button className={btnClass}>
            <span className={"btn__inner"}>
                {props.icon?.position == "left" &&
                    <span className={"btn__icon-wrapper btn__icon-wrapper--left"}>
                        <Icon position={props.icon.position} name={props.icon.name}/>
                    </span>
                }
                <span className={"btn__text"}>
                    {props.text}
                </span>
                {props.icon?.position == "right" &&
                    <span className={"btn__icon-wrapper btn__icon-wrapper--right"}>
                        <Icon position={props.icon.position} name={props.icon.name}/>
                    </span>
                }
            </span>
        </button>
    );
});

const defaultProps : IButtonProps = {
    type: "primary",
}

Button.defaultProps = defaultProps;
export default Button