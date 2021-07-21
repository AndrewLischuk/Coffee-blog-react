import { combineReducers } from "redux";
import { addButtonReducer } from "./addButtonReducer";
import { coffeeInCartReducer } from "./coffeeInCartReducer";
import { eventsLikeReducer } from "./eventsLikeReducer";
import { eventsReducer } from "./server/eventsReduser";


export const rootReducer = combineReducers({
    eventsLikeState: eventsLikeReducer,
    coffeeInCartState: coffeeInCartReducer,
    addButtonState: addButtonReducer,
    eventsBase:eventsReducer
})