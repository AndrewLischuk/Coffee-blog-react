export const eventsReducer = (state = [], action) => {
    switch(action.type) {
        case "EVENTS_FETCH_SUCCESS": {
            return action.eventsBase
            
        }

        default:
            return state
    }
}