import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';

export default function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const urlDataJson = "https://my-json-server.typicode.com/caromponce/Cinema---Ponce/productos";

    useEffect(() => {
        fetch(urlDataJson)
            .then((response) => response.json())
            .then((data) => {
                setProductos(data.filter(item => item.categoriaNombre === props.categoriaNombre));
            });
    }, [props.categoriaNombre]);

    return (
        <ItemList productosJson={productos} />
    )
}