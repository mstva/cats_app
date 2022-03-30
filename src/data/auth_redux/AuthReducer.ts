import {AUTH_DATA_SET, AuthDispatchTypes} from "./AuthActions";

export interface AuthState {
    apiKey: string,
    isGUIDValidPattern: boolean
}

const defaultState: AuthState = {
    apiKey: "",
    isGUIDValidPattern: false
}

export const AuthReducer = (
    state: AuthState = defaultState, action: AuthDispatchTypes
): AuthState => {
    switch (action.type) {
        case AUTH_DATA_SET:
            return {
                ...state,
                apiKey: action.auth_data.apiKey,
                isGUIDValidPattern: action.auth_data.isGUIDValidPattern
            }
        default:
            return state
    }
}
