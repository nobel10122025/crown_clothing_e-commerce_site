import React from 'react'
import './CartItem.scss'

function CartItem({ item : {imageUrl ,name , price , quantity}}) {
    return (
        <div className='cart-item'>
            <img scr = {imageUrl} alt ="item"/>
            <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                ${price} * {quantity}
            </span>
            </div>
        </div>
    )
}

export default CartItem
