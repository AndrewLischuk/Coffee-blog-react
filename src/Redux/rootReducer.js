import { combineReducers } from "redux";
import { eventsCathegoryReducer } from "./eventsCathegoryReducer";
import { eventsKeyReducer } from "./eventsKeyReducer";
import { eventsLikeReducer } from "./eventsLikeReducer";


export const rootReducer = combineReducers({
    eventsLikeState: eventsLikeReducer,
    eventsKeyState: eventsKeyReducer,
    eventsCathegoryState: eventsCathegoryReducer,
})