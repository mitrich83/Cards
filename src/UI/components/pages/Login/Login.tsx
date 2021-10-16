import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import SuperInputText from "../../common/Input/SuperInputText";
import SuperCheckbox from "../../common/Checkbox/SuperCheckbox";
import SuperButton from "../../common/Button/SuperButton";


export const Login = () => {
    return (
        <div>
            <div>
                <SuperInputText type="text"  placeholder="Login"/>
            </div>
            <div>
                <SuperInputText type="password" placeholder="Password"/>
            </div>
            <div>
                <SuperCheckbox />
            </div>
            <div>
                <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot</NavLink>
            </div>
                <SuperButton name={"Login"}/>
            <div>
                <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
            </div>

        </div>
    )
}