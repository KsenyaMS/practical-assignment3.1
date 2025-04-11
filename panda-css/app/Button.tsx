import React from 'react';
import { buttonCva } from './buttonCva';

export const Button = ({ size, color }: { size: 'lg' | 'sm', color: 'primary' | 'secondary' }) => {
    return (
        <button className={buttonCva({ size: size, color: color })}>
            Click Me
        </button>
    )
}