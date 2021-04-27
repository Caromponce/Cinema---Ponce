import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

export default function ItemDetailContainer(props) {
    const [oneItem, setOneItem] = useState([]);
    const urlDataJson = "bdd.json";
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            fetch(urlDataJson)
                .then((response) => response.json())
                .then((data) => {
                    setOneItem(data.find(item => item.id === props.id));
                    setModalShow(true)
                })
        }, 2000);
    }, []);

    return (
        (modalShow ?
            <ItemDetail detalles={oneItem} show={modalShow} onHide={() => props.accionModal(false)} />
            : null)
    );
}