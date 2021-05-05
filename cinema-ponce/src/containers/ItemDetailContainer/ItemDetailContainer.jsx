import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemDetailNoModal from '../../components/ItemDetailNoModal/ItemDetailNoModal';

export default function ItemDetailContainer(props) {
    const [oneItem, setOneItem] = useState('');
    const urlDataJson = "https://my-json-server.typicode.com/caromponce/Cinema---Ponce/productos";
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (oneItem === '') {
            fetch(urlDataJson)
                .then((response) => response.json())
                .then((data) => {
                    setOneItem(data.find(item => item.id === Number(props.id)));
                    setModalShow(props.modal);
                })

        }
    }, [oneItem]);

    return (
        (oneItem === '' ?
            <p>Cargando...</p>
            : (modalShow ? <ItemDetail detalles={oneItem} show={modalShow} onHide={() => props.accionModal(false)} />
                : <ItemDetailNoModal detalles={oneItem} />))
    );
}