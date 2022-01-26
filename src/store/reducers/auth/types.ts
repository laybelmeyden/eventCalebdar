export interface AuthState {
    isAuth: boolean
    counter: number
}

export enum AuthActionEnum{
    SET_AUTH = 'SET_AUTH',
    SET_COUNT = 'SET_COUNT'
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}
export interface SetCountAction {
    type: AuthActionEnum.SET_COUNT;
    payload: number
}

export type AuthAction = SetAuthAction | SetCountAction