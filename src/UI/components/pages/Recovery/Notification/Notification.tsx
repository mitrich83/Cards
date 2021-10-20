import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../../routes/Routes';
import SuperButton from '../../../common/Button/SuperButton';
import s from './Notification.module.css'
import email from './Email.png'

export const Notification = ()=> {

    const [value, setValue] = useState(false)

    const onClickHandler =()=>{
        setValue(true)
     /*   if (value){
            return <Redirect to={PATH.NEW_PASSWORD} />
        }*/
    }

    return(
        <div className={s.page}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2 >Check Email</h2>
                </div>
                <div className={s.email}>
                    <img src={email} alt="send"/></div>
                <div className={s.placeholder}>
                    <span>We’ve sent an Email with instructions to example@mail.com</span>
                </div>
                <div className={s.button}>
                    <SuperButton  onClick={onClickHandler} >Ok</SuperButton>
                </div>

            </div>
        </div>
    )
}