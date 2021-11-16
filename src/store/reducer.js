import {ADD_ITEM_TO_CART} from "./constants"

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
        default:
            throw new Error("invalid action")
    }
}
export {initState}
export default reducer