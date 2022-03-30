
export const AUTH_DATA_SET = "AUTH_DATA_SET"

export type AuthData = {
    apiKey: string,
    isGUIDValidPattern: boolean
}

export interface AuthDataSet {
    type: typeof AUTH_DATA_SET,
    auth_data: AuthData
}

export type AuthDispatchTypes = AuthDataSet

export const AuthDataSetAction = (auth_data: AuthData): AuthDispatchTypes => {
    return {
        type: AUTH_DATA_SET,
        auth_data: auth_data
    }
}

