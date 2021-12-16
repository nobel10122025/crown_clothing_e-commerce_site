import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon} from  '../../Assets/ShoppingBag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../Redux/Cart/cart.action'

function CartIcon({toggleCartHidden}) {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
            <span className='item-count'>0</span>
        </div>
    )
}
const dispatchStatetoProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null,dispatchStatetoProps)(CartIcon)
