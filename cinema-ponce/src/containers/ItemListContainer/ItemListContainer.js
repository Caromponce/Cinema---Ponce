import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';

export default function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const urlDataJson = "bdd.json";

    useEffect(() => {
        setTimeout(() => {
            fetch(urlDataJson)
                .then((response) => response.json())
                .then((data) => setProductos(data));
        }, 2000);
    }, []);

    return (
        <ItemList productosJson={productos} />
    )
}


