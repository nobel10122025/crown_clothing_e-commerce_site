import React from 'react'
import './CartDropdown.scss'
import {useNavigate} from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart.action';
import {selectCartItem} from '../../Redux/Cart/cart.selector'
import {createStructuredSelector} from 'reselect';

function CartDropown({cartItems , dispatch}) {

    const navigate = useNavigate()

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? 
                    (cartItems.map((cartItem)=>(
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    ):
                    (<span className='empty-message'>Your cart is Empty</span>)
                }
            </div>
            <CustomButton onClick={()=> {navigate('/checkout'); dispatch(toggleCartHidden())}}> GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems : selectCartItem
})

export default connect(mapStatetoProps)(CartDropown)
