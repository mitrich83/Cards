import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Login} from '../components/pages/Login/Login';
import {SignUp} from '../components/pages/SignUp/SignUp';
import {Profile} from '../components/pages/Profile/Profile';
import {PasswordRecovery} from '../components/pages/Recovery/PasswordRecovery/PasswordRecovery';
import {NewPassword} from '../components/pages/Recovery/NewPassword/NewPassword';
import {Test} from '../components/pages/Test/Test';
import {Error404} from '../components/pages/Error404/Error404';
import {Notification} from '../components/pages/Recovery/Notification/Notification';


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY:'/password-recovery',
    NOTIFICATION:'/notification',
    NEW_PASSWORD:'/new-password',
    TEST_PAGE:'/test'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <SignUp/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.NOTIFICATION} render={() => <Notification/>}/>
                <Route path={PATH.NEW_PASSWORD + '/:token' } render={() => <NewPassword/>}/>
                <Route path={PATH.TEST_PAGE} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

