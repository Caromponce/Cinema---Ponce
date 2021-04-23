import React, { useState } from 'react';
import Item from '../Item/Item';

export default function ItemList(props) {
    const [showItem, setShowItem] = useState(false);

    function returnList() {
        setShowItem(false);
    }

    function beforeSetShowItem(bool) {
        new Promise((res, rej) => {
            setTimeout(() => res(true), 2000)
        })
            .then(res => {
                setShowItem(bool)
            })

    }
    return (
        <li>
            {showItem
                ? <Item
                    returnList={returnList}
                    datos={props} />
                :
                <a href="#!" onClick={() => beforeSetShowItem(true)}>
                    {props.nombrePelicula}
                </a>
            }
        </li>
    )
}