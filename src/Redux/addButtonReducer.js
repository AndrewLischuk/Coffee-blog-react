export const addButtonReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADDED":
            return {
                ...state,
                [action.id]: true
            }
        case "REMOVED":
            return {
                ...state,
                [action.id]: false
            }
        default:
            return state
    }
}