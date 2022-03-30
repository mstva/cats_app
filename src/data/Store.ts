import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {AuthReducer} from "./auth_redux/AuthReducer";

const rootReducer = combineReducers({
    authReducer: AuthReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof rootReducer>
