export const coffeeInCartReducer = (state = {
    c_1: 1,
}, action) => {
    switch(action.type) {
        case "ADD_CUP_TO_CART":
            return {
                ...state,
                [action.id]: action.cupsInCart
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                [action.id]: action.cupsInCart + 1
            }
        case "DECREMENT_COUNT":
            return {
                ...state,
                [action.id]: action.cupsInCart - 1
            }
        default:
            return state
    }
}