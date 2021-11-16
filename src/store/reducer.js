import {ADD_ITEM_TO_CART, LOGIN} from "./constants"

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
        default:
            throw new Error("invalid action")
    }
}
export {initState}
export default reducer