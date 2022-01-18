import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types';
import * as React from 'react';
import {
    CardItem
} from 'upkit';

export default function Cart({ items, onItemInc, onItemDec }) {
    return (
        <div>
            {!items.length ? <div className="text-center text-sm text-red900"> belum ada items di keranjang </div> : null}
            {items.map((item, index) => {
                return <div key={index} className="mb-2">
                    <CardItem
                        imgUrl={`${process.env.REACT_APP_API_HOST}/upload/${item.image_url}`}
                        name={item.name}
                        qty={item.qty}
                        color="orange"
                        onInc={_ => onItemInc(item)}
                        onDec={_ => onItemDec(item)}
                    />
                </div>
            })}
        </div>
    )
}

Cart.propTypes = {
    items: arrayOf(shape({
        _id: string.isRequired,
        name: string.isRequired,
        qty: oneOfType([string, number]).isRequired,
        onItemInc: func, // (1)
        onItemDec: func // (2)
    })),
}
