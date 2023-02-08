import React, {MutableRefObject} from "react";
import cx from 'classnames';
import './styles.scss'
export type TButtonType = 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline'

export interface IButtonProps<Type = TButtonType>{
    type?: Type;
    text?: string | number;
    ref?: MutableRefObject<any>;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = (props: IButtonProps) => {
    const { text, type, onClick, disabled, ref} = props;
    const btnClass = cx('btn', {
        [`btn_${type}`]: true
    });

    return (
        <button className={btnClass} onClick={onClick} disabled={disabled} ref={ref}>
            <span className={"btn_inner"}>
                <span className={"btn_text"}>
                    {text}
                </span>
            </span>
        </button>
    );
}

const defaultProps : IButtonProps = {
    type: "primary",
}

Button.defaultProps = defaultProps;
export default Button