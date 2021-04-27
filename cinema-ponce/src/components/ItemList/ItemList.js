import React, { useState } from 'react';
import Item from '../Item/Item';

export default function ItemList(props) {

    return (
        <ul>
            {props.productosJson.map(producto =>
                <Item
                    key={producto.id}
                    datosProducto={producto}
                />
            )}
        </ul>
    )
}