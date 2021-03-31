import s from './ModalHeader.module.css'
import {useState} from 'react'
import InputMask from 'react-input-mask';


const ModalHeader = ({isActiveModal, setIsActiveModal}) => {
    const [auth, setAuth] = useState(true);
    return(
        <div className={isActiveModal ? s.container + ' ' + s.active : s.container} onClick={setIsActiveModal}>
            <div onClick={(e) => e.stopPropagation()} className={s.all}>
                <div className={s.btns}>
                    <button onClick={() => setAuth(true)} className={auth ? s.login + ' ' + s.logActive : s.login}>Войти</button>
                    <button onClick={() => setAuth(false)} className={!auth ? s.reg + ' ' + s.logActive : s.reg}>Регистрация</button>
                </div>
                <div>
                    <div className={auth ? s.content : s.disable}>
                        <div className={s.content__inner}>
                            <input className={s.input} placeholder="Почта"/>
                            <input className={s.input} placeholder="Пароль"/>
                            <label className={s.label}><input type="checkbox" /><p>Запомнить аккаунт</p></label>
                            <button onClick={() => alert('Сервер не отвечает')}>Войти</button>
                        </div>
                    </div>
                    <div className={!auth ? s.content : s.disable}>
                        <div className={s.content__inner}>
                            <input className={s.input} placeholder="Почта"/>
                            <InputMask  mask="+7(\999) 999 99 99" placeholder="Телефон" className={s.input}/>
                            <input className={s.input} placeholder="Пароль"/>
                            <input className={s.input} placeholder="Повтор пароля"/>
                            <label className={s.label}><input type="checkbox" /><p>Я согласен на <a href="" target="_blank">обработку персональных данных</a></p></label>
                            <button onClick={() => alert('Сервер не отвечает')}>Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalHeader;