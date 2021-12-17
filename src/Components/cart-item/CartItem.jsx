import React from 'react'
import './CartItem.scss'

function CartItem({ item : {imageUrl ,name , price , quantity}}) {
    return (
        <div className='cart-item'>
            <div class="image" style = {{backgroundImage : `url(${imageUrl})`}} />
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
