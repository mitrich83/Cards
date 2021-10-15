
const initState = {
    isLogin: false
}

export const LoginReducer = (state = initState, action: LoginACType)=> {
    switch (action.type){
        case 'SHOW-LOGIN':{
            return {
                ...state,
                isLogin: action.isLogin
            }
        }
        default:
            return state
    }
}

type LoginACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLogin:boolean) => (
    {type: 'SHOW-LOGIN', isLogin } as const )