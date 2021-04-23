import React, { Component, useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(initial);

    function onDecrement() {
        if (Number(cantidad) - 1 >= 0) {
            setCantidad(Number(cantidad) - 1);
        }
    }

    function onIncrement() {
        if (Number(cantidad) + 1 <= stock) {
            setCantidad(Number(cantidad) + 1);
        }
    }

    function verificarStock() {
        if (stock > 0 && cantidad > 0) {
            onAdd(cantidad)
        }
    }

    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <input type="number" value={cantidad} />
            <button onClick={onIncrement}>+</button><br />
            <button onClick={verificarStock}>Agregar Película</button>
        </div>
    )
}
