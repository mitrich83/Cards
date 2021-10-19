import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {LoginReducer} from './login-reducer';
import {NewPasswordReducer} from './new-password-reducer';
import {PasswordRecoveryReducer} from './password-recovery-reducer';
import {ProfileReducer} from './profile-reducer';
import { SignUpReducer} from './sign-up-reducer';
import {appReducer} from "./app-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    login: LoginReducer,
    newPassword: NewPasswordReducer,
    passwordRecovery: PasswordRecoveryReducer,
    profile: ProfileReducer,
    signUp: SignUpReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


