import React from 'react';
import Button from './button/button'
import Container from './container/container'
import Dropdown from './dropdown/dropdown'
import './App.css';

function App() {

return (
    <>
    <Container>
        <div>
            <Button text={"Primary"} />
            <Button type={"primary-outline"} text={"Outline"} />
            <Button text={"Disabled"} disabled />
            <Dropdown id="suggestion-element" button={{
                type: "secondary",
                text: "Erinevad Toimingud"
            }} items={[
                { label: 'First option', href: "#" },
                { label: 'Second option', href: "#" },
                { label: 'Third option', href: "#" },
            ]} />
        </div>
        <div>
            <Button type={"secondary"} text={"Secondary"} />
            <Button type={"secondary-outline"} text={"Outline"} />
            <Button type={"secondary"} text={"Disabled"} disabled/>
            <Dropdown id="suggestion-element" button={{
                text: "Hallo"
            }} items={[
                {
                    label: 'First option',
                    href: "#"
                },
                {
                    label: 'Second option',
                    href: "#"
                },
                {
                    label: 'Third option',
                    href: "#"
                }
            ]} />
        </div>
    </Container>
    </>
    );
}

export default App;
