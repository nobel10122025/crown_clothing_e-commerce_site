import React from 'react'
import './CheckoutItem.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, removeItem, addItem } from '../../Redux/Cart/cart.action'

function CheckoutItem({cartItem ,clearItem ,removeItem , addItem}) {
    const {name , price , quantity , imageUrl} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>$ {price}</span>
            
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const dispatchStatetoProps = (dispatch) => ({
    clearItem : (item)=> dispatch(clearItemFromCart(item)),
    removeItem : (item) =>dispatch(removeItem(item)),
    addItem : (item)=> dispatch(addItem(item))
})
export default connect(null , dispatchStatetoProps)(CheckoutItem)
