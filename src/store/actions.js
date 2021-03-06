import {ADD_ITEM_TO_CART, LOGIN, REMOVE_ITEM_CART, LOGOUT} from "./constants"

export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    item
})

export const login = payload => ({
    type: LOGIN,
    payload
})

export const logout = payload => ({
    type: LOGOUT,
    payload
})
export const removeItemCart = payload => ({
    type: REMOVE_ITEM_CART,
    payload
})
