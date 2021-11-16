import {ADD_ITEM_TO_CART, LOGIN} from "./constants"

export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    item
})

export const login = payload => ({
    type: LOGIN,
    payload
})