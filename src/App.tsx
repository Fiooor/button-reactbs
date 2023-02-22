import React from 'react';
import Button from './button/button'
import Container from './container/container'
import Dropdown from './dropdown/dropdown'
import './App.css';

function App() {
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
            <Button icon={{
                name: "ArrowDown",
                position: "center",
            }}/>
            <Dropdown id='suggestion-element' button={{
                text: 'Dropdown Button',
                icon: {
                    name:"ArrowRight",
                    position:"right"
                }
            }} items={[
                {
                    label: 'First option',
                    href: '#'
                },
                {
                    label: 'Second option, hover, focus',
                    href: '#',
                    isActive: true,
                    isHovered: true
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
                    color: 'employee',
                    isHovered: true
                }
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
                type: 'secondary',
                icon: {
                    name:"ArrowRight",
                    position:"right"
                }
            }} items={[
                {
                    label: 'First option',
                    href: '#'
                },
                {
                    label: 'Second option, hover, focus',
                    href: '#',
                    isActive: true,
                    isHovered: true
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
                    color: 'employee',
                    isHovered: true
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
            <Button text={'Disabled Button'} type={"tertiary"} disabled icon={{
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
                icon: {
                    name:"ArrowRight",
                    position:"right"
                }
            }} items={[
                {
                    label: 'First option',
                    href: '#'
                },
                {
                    label: 'Second option, hover, focus',
                    href: '#',
                    isActive: true,
                    isHovered: true
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
                    color: 'employee',
                    isHovered: true
                }
            ]} />
        </Container>
    </Container>
    </>
    );
}

export default App;
