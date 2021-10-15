import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {LoginReducer} from './login-reducer';
import {NewPasswordReducer} from './new-password-reducer';
import {PasswordRecoveryReducer} from './password-recovery-reducer';
import {ProfileReducer} from './profile-reducer';
import {RegistrationReducer} from './registration-reducer';


const rootReducer = combineReducers({
    login: LoginReducer,
    newPassword: NewPasswordReducer,
    passwordRecovery: PasswordRecoveryReducer,
    profile: ProfileReducer,
    registration: RegistrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


