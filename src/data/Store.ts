import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {AuthReducer} from "./auth_redux/AuthReducer";
import {ImagesReducer} from "./feed_redux/FeedReducer";
import {FavoriteReducer} from "./favorite_redux/FavoriteReducer";

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    imagesReducer: ImagesReducer,
    favoriteReducer: FavoriteReducer,
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof rootReducer>
