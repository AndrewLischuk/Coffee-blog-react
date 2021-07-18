import { omit } from "lodash"

export const coffeeInCartReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_CUP_TO_CART":
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    productCount: action.cupsInCart,
                }
            }
        case "REMOVE_CUP_FROM_CART":
            return omit (state, action.id)
        case "INCREMENT_COUNT":
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    productCount: action.cupsInCart + 1,
                }
            }
        case "DECREMENT_COUNT":
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    productCount: action.cupsInCart -1,
                }
            }
        default:
            return state
    }
}