import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';
import {selectCartItem} from '../../Redux/Cart/cart.selector'

function CartDropown({cartItems}) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map((cartItem)=>(
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                }
            </div>
            <CustomButton> GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStatetoProps = (state) => ({
    cartItems : selectCartItem(state)
})

export default connect(mapStatetoProps)(CartDropown)
