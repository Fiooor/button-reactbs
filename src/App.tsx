import React from 'react';
import Button from './button/button'
import Container from './container/container'
import Dropdown from './dropdown/dropdown'
import Icon from "./icon/icon";
import './App.css';

function App() {
    console.log(Icon)
return (
    <>
    <Container>
        <Container>
            <Button text={'Primary Button'} icon={{
                name: "ArrowRight",
                position: "right"
            }}/>
            <Button type={'primary-outline'} text={'Outline Button'} icon={{
                name: "ArrowRight",
                position: "right"
            }}/>
            <Button text={'Disabled Button'} disabled icon={{
                name: "ArrowRight",
                position: "left",
            }}/>
            <Dropdown id='suggestion-element' button={{
                type: 'secondary',
                text: 'Dropdown Button',
            }} items={[
                { label: 'First option', href: '#' },
                { label: 'Second option', href: '#' },
                { label: 'Third option', href: '#' },
            ]} />
        </Container>
        <Container>
            <Button type={'secondary'} text={'Secondary Button'} />
            <Button type={'secondary-outline'} text={'Outline Button'} />
            <Button type={'secondary'} text={'Disabled Button'} disabled/>
            <Dropdown id='suggestion-element' button={{
                text: 'Dropdown Button',
            }} items={[
                {
                    label: 'First option',
                    href: '#'
                },
                {
                    label: 'Second option, hover, focus',
                    href: '#',
                    isActive: true
                },
                {
                    label: 'Third option, disabled',
                    href: '#',
                    disabled: true,
                },
                {
                    label: 'Fourth option, with image/icon',
                    href: '#',
                },
                {
                    label: 'Fifth option, employee',
                    href: '#',
                    color: 'employee'
                },
                {
                    label: 'Sixth option, employee hover',
                    href: '#',
                    color: 'employee'
                }
            ]} />
        </Container>
    </Container>
    </>
    );
}

export default App;
