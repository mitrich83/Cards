
const initState = {
    newPassword: ''
}


export const NewPasswordReducer = (state = initState, action: NewPasswordACType)=> {
    switch (action.type) {
        case 'SHOW-NEW-PASSWORD': {
            return {
                ...state,
                newPassword: action.newPassword
            }
        }
        default:
            return state
    }
}

    type NewPasswordACType = ReturnType<typeof NewPasswordAC>

    export const NewPasswordAC = (newPassword: string) => (
        {type: 'SHOW-NEW-PASSWORD', newPassword } as const )