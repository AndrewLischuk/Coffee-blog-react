

export const eventsKeyReducer = (state = {}, action) => {
    switch(action.type) {
        case "HANDLE_EVENT_KEY": {
            return {                
                [action.id]: action.likesCount
            }
        }
        default:
            return state
    }
}