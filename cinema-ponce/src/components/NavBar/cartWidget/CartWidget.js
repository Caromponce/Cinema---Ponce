import React from 'react';
import cartWidget from './carrito.png'
import './cartWidget.css';

export default function CartWidget() {
    return (
        <div>
            <button className='button--cartWidget'>
                <img className='img--cartWidget' src={cartWidget} alt="carrito" />
            </button>
        </div>
    )
}