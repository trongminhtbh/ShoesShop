import {ADD_ITEM_TO_CART} from "./constants"

export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    item
})