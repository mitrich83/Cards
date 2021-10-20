import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {passwordRecoverTC} from '../../../../../BLL/password-recovery-reducer';
import SuperButton from '../../../common/Button/SuperButton';
import s from './PasswordRecovery.module.css'
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../../routes/Routes';


export const PasswordRecovery = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const from = 'test-front-admin <dmitry.malykhin@mail.ru>'

    const message = `<div>
						вы отправили запрос на восстановления пароля, для продожения перейдите по ссылке:
						<a href='http://localhost:3000/Cards#/set-new-password/$token$'>link
						</a>
						если это были на Вы - то ничего не делайте
					</div>`

    const sendEmailHandler =  () => {
         dispatch (passwordRecoverTC(email, from, message))
    }

    return (
        <div className={s.page}>
            <div className={s.container}>
                <div>
                    <h2 className={s.title}> Forgot your password</h2>
                </div>
                <div className={s.input}>
                    <input
                        value={email}
                        placeholder={'Enter email'}
                        onChange={onChangeHandler}
                    />

                </div>
                <div className={s.placeholder}>
                    <span> Enter your email address and we will send you further instructions</span>
                </div>
                <div className={s.button}>
                    <SuperButton
                        onClick={sendEmailHandler}
                    >Send instruction
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}