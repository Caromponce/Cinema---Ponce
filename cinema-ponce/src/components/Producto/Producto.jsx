import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';

export default function Producto() {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    });

    return (
        <ItemDetailContainer id={id} modal={false} />
    )
}
