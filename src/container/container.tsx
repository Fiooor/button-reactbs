import React from 'react';
import './styles.scss'
import classNames from 'classnames';

interface ContainerProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

const Container = (props: ContainerProps) => {
    const contClass = classNames('container',
        props.className
    );

    return (
        <div className={contClass}>
            {props.children}
        </div>
    );
}

export default Container;
