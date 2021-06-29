import { combineReducers } from "redux";
import { eventsKeyReducer } from "./eventsKeyReducer";
import { eventsLikeReducer } from "./eventsLikeReducer";


export const rootReducer = combineReducers({
    eventsLikeState: eventsLikeReducer,
    eventsKeyState: eventsKeyReducer,
})