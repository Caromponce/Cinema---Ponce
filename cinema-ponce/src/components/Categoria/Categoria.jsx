import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';

export default function Categoria() {
    const { nombre } = useParams();
    const [categoria, setCategoria] = useState(nombre);

    useEffect(() => {
        setCategoria(nombre)
        console.log(nombre, categoria);
    }, [nombre]);

    return (
        <ItemListContainer categoriaNombre={categoria} />
    )
}
