import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemDetailNoModal from '../../components/ItemDetailNoModal/ItemDetailNoModal';

export default function ItemDetailContainer(props) {
    const [oneItem, setOneItem] = useState([]);
    const urlDataJson = "https://my-json-server.typicode.com/caromponce/Cinema---Ponce/productos";
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(urlDataJson)
                .then((response) => response.json())
                .then((data) => {
                    setOneItem(data.find(item => item.id === props.id));
                    setModalShow(props.modal);
                })
        }, 2000);
    }, []);

    return (
        (oneItem !== [] && modalShow ?
            <ItemDetail detalles={oneItem} show={modalShow} onHide={() => props.accionModal(false)} />
            : <ItemDetailNoModal detalles={oneItem} />)
    );
}