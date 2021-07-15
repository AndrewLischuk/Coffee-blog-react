import { combineReducers } from "redux";
import { coffeeInCartReducer } from "./coffeeInCartReducer";
import { eventsKeyReducer } from "./eventsKeyReducer";
import { eventsLikeReducer } from "./eventsLikeReducer";


export const rootReducer = combineReducers({
    eventsLikeState: eventsLikeReducer,
    eventsKeyState: eventsKeyReducer,
    coffeeInCartState: coffeeInCartReducer,
})