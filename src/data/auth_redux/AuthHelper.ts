import {Dispatch} from "react";
import {
    AuthData,
    AuthDataSetAction,
    AuthDispatchTypes,
} from "./AuthActions";

export const SetAuthDataAction = (
    authData: AuthData
) => (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch(AuthDataSetAction(authData))
}

