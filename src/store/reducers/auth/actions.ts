import { AuthAPI } from './../../../fetch/mockappAPI';
import { AppDispatch } from "../..";
import { IUuser } from "../../../models/IUuser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction } from "./types";
export const AuthActionCreators = {
    setLogin: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setUser: (user: IUuser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsLoading: (payload: boolean): SetLoadingAction => ({ type: AuthActionEnum.SET_LOADING, payload }),
    setIsError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await AuthAPI.postLogin()
            const mockusers = response.data.find((user) => user.username === username && user.password === password)
            if(mockusers) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockusers.username)
                dispatch(AuthActionCreators.setLogin(true))
                dispatch(AuthActionCreators.setUser(mockusers))
            }else{
                dispatch(AuthActionCreators.setIsError('incorrect info username or password'))
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (error) {
            dispatch(AuthActionCreators.setIsError('Ошибка входа !'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUuser))
            dispatch(AuthActionCreators.setLogin(false))
    }
}