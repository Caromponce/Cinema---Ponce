import React, { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(initial);
    const [sinStock, setSinStock] = useState(stock === 0 ? true : false);

    function onDecrement() {
        if (Number(cantidad) - 1 >= 0) {
            setCantidad(Number(cantidad) - 1);
        }
    }

    function onIncrement() {
        if (Number(cantidad) + 1 <= stock) {
            setCantidad(Number(cantidad) + 1);
        } else {
            setSinStock(true)
        }
    }

    function verificarStock() {
        if (stock > 0 && cantidad > 0) {
            onAdd(cantidad)
        }
    }

    return (
        <div>
            {sinStock ?
                <div>
                    <p>No hay stock</p>
                </div>
                :
                <div>
                    <button onClick={onDecrement}>-</button>
                    <input type="number" value={cantidad} />
                    <button onClick={onIncrement} disabled={cantidad === stock ? "disabled" : ''}>+</button><br />
                    <button onClick={verificarStock} disabled={cantidad === 0 ? "disabled" : ''}>Agregar Producto</button>
                    {cantidad === stock ?
                        <div>
                            <p>No hay más stock</p>
                        </div> : ''}
                </div>
            }
        </div>
    )
}
