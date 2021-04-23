import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer(props) {

    return (
        <ul>
            {props.json.map(element =>
                <ItemList
                    key={element.id}
                    imagenPelicula={element.imagenPelicula}
                    nombrePelicula={element.nombrePelicula}
                    descripcionPelicula={element.descripcionPelicula}
                    price={element.price}
                    stock={element.stock}
                />
            )}
        </ul>
    )
}


