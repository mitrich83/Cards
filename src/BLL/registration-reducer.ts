
const initState = {
    registration: false
}


export const RegistrationReducer = (state = initState, action: RegistrationACType)=> {
    switch (action.type){
        case 'SHOW-REGISTRATION':{
            return {
                ...state,
                isLogin: action.registration
            }
        }
        default:
            return state
    }

}

type RegistrationACType = ReturnType<typeof registrationAC>

export const registrationAC = (registration:boolean) => (
    {type: 'SHOW-REGISTRATION', registration } as const )