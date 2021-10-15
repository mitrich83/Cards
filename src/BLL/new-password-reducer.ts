
const initState = {
    newPassword: ''
}


export const NewPasswordReducer = (state = initState, action: NewPasswordReducerACType)=> {
    switch (action.type) {
        case 'SHOW-LOGIN': {
            return {
                ...state,
                newPassword: action.newPassword
            }
        }
        default:
            return state
    }
}

    type NewPasswordReducerACType = ReturnType<typeof NewPasswordReducerAC>

    export const NewPasswordReducerAC = (newPassword: string) => (
        {type: 'SHOW-LOGIN', newPassword } as const )