import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import SuperInputText from "../../common/Input/SuperInputText";
import SuperCheckbox from "../../common/Checkbox/SuperCheckbox";
import SuperButton from "../../common/Button/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../BLL/store";
import {loginTC} from "../../../../BLL/login-reducer";


export const Login = () => {

    const dispatch = useDispatch()
    const isLogin = useSelector<AppRootStateType>(state => state.login.isLogin)
    const errorMessage= useSelector<AppRootStateType>(state => state.login.error)

    interface State {
        password: string;
        confirmPassword: string;
        email: string;
        showPassword: boolean;
        showConfirmPassword: boolean;
        disabled: boolean;
        rememberMe: boolean;
    }
    const [value,setValue] =useState<State>({
        password: '',
        confirmPassword: '',
        email: '',
        showPassword: false,
        showConfirmPassword: false,
        disabled: false,
        rememberMe: true,
    })

    const handleInputChange =(props: keyof State)=>(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue({...value,[props]:e.target.value})
    }

    const handleCheckBoxChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
            setValue(value=>({...value,rememberMe:e.target.checked }))
    }

    const sendData=()=>{
        dispatch(loginTC(value.email,value.password,value.rememberMe))
    }


    if (isLogin){
        return <Redirect to={PATH.PROFILE}/>
    }


    return (
        <div>
            {errorMessage && <div style={{color:'red'}}>`{errorMessage}`</div>}
            <div>
                <SuperInputText
                    type="text"
                    placeholder="Login"
                    value={value.email}
                    onChange={handleInputChange('email')}
                />
            </div>
            <div>
                <SuperInputText
                    type="password"
                    placeholder="Password"
                    value={value.password}
                    onChange={handleInputChange("password")}
                />
            </div>
            <div>
                <SuperCheckbox
                    checked={value.rememberMe}
                    children={"remember me"}
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div>
                <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot</NavLink>
            </div>
            <SuperButton
                children={"Login"}
                onClick={sendData}
            />
            <div>
                <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
            </div>

        </div>
    )
}