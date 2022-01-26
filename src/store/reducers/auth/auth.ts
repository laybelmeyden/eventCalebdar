import { AuthAction, AuthActionEnum, AuthState } from "./types";
const initialState: AuthState = {
    isAuth: false,
    counter: 0
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case AuthActionEnum.SET_COUNT:
            return { ...state, counter: action.payload + 1 }
        default:
            return state
    }

};

//actions 

export const setLogin = (auth: boolean) => ({ type: AuthActionEnum.SET_AUTH, payload: auth })
export const setCount = (count: number) => ({ type: AuthActionEnum.SET_COUNT, payload: count })

export default authReducer;
