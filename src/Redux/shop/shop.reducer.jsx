import { ShopTypes } from "./shop.types";
const INITIAL_DATA = {
    collections : null
}
export const shopReducer = ( state = INITIAL_DATA , action) => {
    switch (action.type) {
        case ShopTypes.UPDATE_COLLECTIONS : 
        return {
            ...state ,
            collections : action.payload
        };
        default:
            return state;
    }
} 
export default shopReducer