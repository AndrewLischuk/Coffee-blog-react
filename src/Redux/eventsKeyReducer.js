

export const eventsKeyReducer = (state = {}, action) => {
    switch(action.type) {
        case "HANDLE_EVENT_KEY": {
            return {                
                [action.id]: action.likesCount
            }
        }
        case "HANDLE_CATHEGORY_KEY": {
            return {
                cathegory: action.cathegory
            }
        }
        default:
            return state
    }
}