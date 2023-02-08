import React from "react";
import './styles.scss'
import classNames from "classnames";

interface ContainerProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

const Container = (props: ContainerProps) => {
    const { children, className } = props;
    var contClass = classNames('container', className);
    return (
        <div className={contClass}>
            {children}
        </div>
    );
}

export default Container;
