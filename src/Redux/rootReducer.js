import { combineReducers } from "redux";
import { addButtonReducer } from "./addButtonReducer";
import { coffeeInCartReducer } from "./coffeeInCartReducer";
import { eventsKeyReducer } from "./eventsKeyReducer";
import { eventsLikeReducer } from "./eventsLikeReducer";


export const rootReducer = combineReducers({
    eventsLikeState: eventsLikeReducer,
    eventsKeyState: eventsKeyReducer,
    coffeeInCartState: coffeeInCartReducer,
    addButtonState: addButtonReducer,
})