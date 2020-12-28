import React, { useState } from 'react';
import { HOC } from './HOC';

const ChangeColor = ({ mouseOverHandler, mouseOutHandler }) => {
    const [colour, setColour] = useState('grey');
    const changeCol = () => {
        setColour('green');
    }
    const colorStyle = {
        color: colour
    }

    return (<div onClick={changeCol} onMouseLeave={mouseOutHandler} onMouseEnter={mouseOverHandler} style={colorStyle}>
        <h1>Higher-Order Components</h1>
        <p>
            A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
        </p>

    </div>)
}
export default HOC(ChangeColor);