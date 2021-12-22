import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import cartReducer from './Cart/cart.reducer';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';

const rootReducer =  combineReducers({
    user: userReducer ,
    cart : cartReducer
})

const PersistConfig = {
    key: "root",
    storage,
    whiteList : [ 'cart' ]
}
export default persistReducer(PersistConfig , rootReducer)