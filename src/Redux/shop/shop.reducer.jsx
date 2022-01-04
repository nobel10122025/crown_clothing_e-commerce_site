import { ShopActionTypes } from "./shop.types";
const INITIAL_DATA = {
    collections : null,
    isLoading : false,
    erroeMessage : undefined
}
export const shopReducer = ( state = INITIAL_DATA , action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START :
            return {
                ...state ,
                isLoading : true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS :
            return {
                ...state ,
                isLoading : false,
                collections : action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE : 
            return {
                ...state ,
                isLoading : false ,
                erroeMessage : action.payload
            }

        default:
            return state;
    }
} 
export default shopReducer