import {GET_PRODUCTS} from "../Constants/ProductsConstants"
export const ProductsReducer = (state, action) => {
    switch (action.type){
        case GET_PRODUCTS:
        return {...state, products: action.payload}
        default:
        return state
    }
}
