import SHOP_DATA from "./Shop.data";
const INITIAL_DATA = {
    collections : SHOP_DATA
}
export const shopReducer = ( state = INITIAL_DATA , action) => {
    switch (action.type) {
        default:
            return state;
    }
} 
export default shopReducer