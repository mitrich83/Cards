import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Login} from '../components/pages/Login/Login';
import {Registration} from '../components/pages/Registration/Registration';
import {Profile} from '../components/pages/Profile/Profile';
import {PasswordRecovery} from '../components/pages/PasswordRecovery/PasswordRecovery';
import {NewPassword} from '../components/pages/NewPassword/NewPassword';
import {Test} from '../components/pages/Test/Test';
import {Error404} from '../components/pages/Error404/Error404';


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY:'/password-recovery',
    NEW_PASSWORD:'/new-password,',
    TEST_PAGE:'/test'
}


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.TEST_PAGE} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}
