


export const eventsCathegoryReducer = (state ={}, action) => {
    switch(action.type) {
        case "HANDLE_CATHEGORY_KEY": {
            return {
                [action.cathegory]:action.cathegory
            }
        }

        default:
            return state
    }
}