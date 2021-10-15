

export const PasswordRecoveryReducer = () => {
    {
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
}

