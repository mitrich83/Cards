import {authAPI, LoginParamsType} from "../DAL/api";
import {Dispatch} from "redux";
import {AxiosError} from "axios";

type ActionsType =
    ReturnType<typeof loading> |
    ReturnType<typeof setError>|
    ReturnType<typeof setProfileData>


const initialState = {
    isLogin: false,
    error: null,
    name:null
}

type InitialStateType = {
    isLogin: boolean
    error: string |null
    name: string |null
}

export const LoginReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-LOGIN': {
            return {...state, isLogin: action.value}
        }
        case "SET-ERROR": {
            return {...state, error: action.error}
        }
        case "SET-PROFILE":{
            return {...state,name:action.name}
        }
        default:
            return state
    }
}


export const loading = (value: boolean) => (
    {type: 'SET-LOGIN', value} as const)
export const setError = (error: string) => (
    {type: 'SET-ERROR', error} as const)
export const setProfileData = (name: string) => (
    {type: "SET-PROFILE", name} as const
)


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then(response =>
            dispatch(loading(true)
            ))
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error))
        })
}


export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout().then(res =>
        dispatch(loading(false))
    )
}

