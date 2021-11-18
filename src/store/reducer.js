import {ADD_ITEM_TO_CART, LOGIN, REMOVE_ITEM_CART} from "./constants"

const initState = {
    listShoes: [],
    orders: [],
    login: {},
}

function reducer(state, action) {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                orders: [...state.orders, action.item]
            }
        case LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case REMOVE_ITEM_CART:
            const itemIndex = state.orders.lastIndexOf(action.payload)
            const newOrders = state.orders.splice(itemIndex,1)
            return {
                ...state,
                orders: [...state.orders]
            }
        default:
            throw new Error("invalid action")
    }
}
export {initState}
export default reducer