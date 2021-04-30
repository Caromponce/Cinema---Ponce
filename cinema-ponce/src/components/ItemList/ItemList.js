import React from 'react';
import Item from '../Item/Item';

export default function ItemList(props) {

    return (
        (props.productosJson.length > 0 ?
            <ul>
                {props.productosJson.map(producto =>
                    <Item
                        key={producto.id}
                        datosProducto={producto}
                    />
                )}
            </ul>
            : <p>No hay productos de esa categoria</p>
        )
    )
}