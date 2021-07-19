import { omit } from "lodash"

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
        case "REMOVED_ALL":
            return omit(state, action.id)
        default:
            return state
    }
}