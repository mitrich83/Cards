
const initState = {
    passwordRecovery: false
}

export const PasswordRecoveryReducer = (state = initState, action: PasswordRecoverACType) => {
    {
        switch (action.type) {
            case 'SHOW-PASSWORD-RECOVERY': {
                return {
                    ...state,
                    passwordRecovery: action.passwordRecovery
                }
            }
            default:
                return state
        }
    }
}

type PasswordRecoverACType = ReturnType<typeof passwordRecoverAC>

export const passwordRecoverAC = (passwordRecovery:boolean) => (
    {type: 'SHOW-PASSWORD-RECOVERY', passwordRecovery } as const )