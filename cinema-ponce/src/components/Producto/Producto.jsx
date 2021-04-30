import React from 'react';
import { useParams } from 'react-router';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';

export default function Producto() {
    const { id } = useParams();

    return (
        <ItemDetailContainer id={id} modal={false} />
    )
}
