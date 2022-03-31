import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {AuthReducer} from "./auth_redux/AuthReducer";
import {ImagesReducer} from "./feed_redux/FeedReducer";

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    imagesReducer: ImagesReducer,
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof rootReducer>
