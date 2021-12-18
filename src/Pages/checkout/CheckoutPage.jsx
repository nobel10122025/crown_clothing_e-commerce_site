import React from 'react'
import './CheckoutPage.scss'
import CheckoutItem from '../../Components/checkout-item/CheckoutItem';
import { connect } from 'react-redux';
import {selectCartItemTotal} from '../../Redux/Cart/cart.selector';
import {selectCartItem} from '../../Redux/Cart/cart.selector';
import {createStructuredSelector} from 'reselect';

function CheckoutPage({cartItems , total}) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => 
            (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
            }
            <div className='total'>TOTAL : ${total}</div>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems : selectCartItem,
    total : selectCartItemTotal
})
export default connect(mapStatetoProps)(CheckoutPage)
