import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon} from  '../../Assets/ShoppingBag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../Redux/Cart/cart.action'
import { selectCartItemCount} from '../../Redux/Cart/cart.selector'
import {createStructuredSelector} from 'reselect'

function CartIcon({toggleCartHidden ,itemCount}) {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    itemCount : selectCartItemCount
})

const dispatchStatetoProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStatetoProps,dispatchStatetoProps)(CartIcon)
