import { cartActionTypes } from "./cart.types";
const INITIAL_STATE ={
    hidden : true,
    cartItems : []
}
const CartReducer = ( state = INITIAL_STATE , action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return { ...state , 
                    hidden: !state.hidden
                }
    
        case cartActionTypes.ADD_CART_ITEM :
            return {
                ...state , 
                cartItems : [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}
export default CartReducer