import React from 'react';
import SuperButton from "../../common/Button/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../../../BLL/login-reducer";
import {AppRootStateType} from "../../../../BLL/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../routes/Routes";


export const Profile = () => {
    const isLogin = useSelector<AppRootStateType>(state => state.login.isLogin)
    const dispatch= useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

/*    if(!isLogin){
       return <Redirect to={PATH.LOGIN}/>
    }*/
    return (
        <div>
            <div>
                Profile
                <div>
                    <img src="" alt="avatar"/>
                </div>
                <div>
                    Name:
                </div>
                <div>
                    <SuperButton
                        children={'Logout'}
                        onClick={logoutHandler}
                    />
                </div>
            </div>

        </div>
    )
}