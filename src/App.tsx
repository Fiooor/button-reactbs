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
            <Button text={'Disabled Button'} icon={{
                name: "ArrowRight",
                position: "left",
            }}/>
            <Button icon={{
                name: "ArrowDown",
                position: "center",
            }}/>
            <Dropdown id='suggestion-element' button={{
                text: 'Dropdown Button',
            }} items={[
                { label: 'First option', href: '#' },
                { label: 'Second option', href: '#' },
                { label: 'Third option', href: '#' },
            ]} />
        </Container>
        <Container>
            <Button type={'secondary'} text={'Secondary Button'} icon={{
                name: "ArrowRight",
                position: "right"
            }}/>
            <Button type={'secondary-outline'} text={'Outline Button'} icon={{
                name: "ArrowRight",
                position: "right"
            }}/>
            <Button type={'secondary'} text={'Disabled Button'} disabled icon={{
                name: "ArrowRight",
                position: "left"
            }}/>
            <Button type={'secondary'} icon={{
                name: "ArrowDown",
                position: "center"
            }}/>
            <Dropdown id='suggestion-element' button={{
                text: 'Dropdown Button',
                type: 'secondary'
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
        <Container>
            <Button text={'Tertiary Button'} type={"tertiary"} icon={{
                name: "ArrowRight",
                position: "right"
            }}/>
            <Button type={'tertiary-outline'} text={'Outline Button'} icon={{
                name: "ArrowRight",
                position: "right"
            }}/>
            <Button text={'Disabled Button'} type={"tertiary"} icon={{
                name: "ArrowRight",
                position: "left",
            }}/>
            <Button type={"tertiary"} icon={{
                name: "ArrowDown",
                position: "center",
            }}/>
            <Dropdown id='suggestion-element' button={{
                type: "tertiary",
                text: 'Dropdown Button',
            }} items={[
                { label: 'First option', href: '#' },
                { label: 'Second option', href: '#' },
                { label: 'Third option', href: '#' },
            ]} />
        </Container>
    </Container>
    </>
    );
}

export default App;
