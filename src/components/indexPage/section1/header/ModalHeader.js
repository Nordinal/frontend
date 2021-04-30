import s from './ModalHeader.module.css'
import {useState, useEffect} from 'react'
import InputMask from 'react-input-mask';
import * as axios from "axios"
import { useHistory } from 'react-router';


const ModalHeader = (props) => {
    const [auth, setAuth] = useState(true);
    const [activeErr, setActiveErr] = useState(false);
    let history = useHistory();

    const handleClick = () => {
        axios.post("http://localhost:5000/api/user", props.reducer).then((res) => {
                if(res.data == false){
                    setActiveErr(true);
                    props.submitFalse();
                }
                else{
                    setActiveErr(false);
                    let {email, password, tel} = res.data;
                    console.log(email, password, tel)
                    props.submit(email, password, tel);
                    history.push("/auth/profile");
                }
            })
    }

    return(
        <div className={props.isActiveModal ? s.container + ' ' + s.active : s.container} onClick={props.setIsActiveModal}>
            <div onClick={(e) => e.stopPropagation()} className={s.all}>
                <div className={s.btns}>
                    <button onClick={() => setAuth(true)} className={auth ? s.login + ' ' + s.logActive : s.login}>Войти</button>
                    <button onClick={() => setAuth(false)} className={!auth ? s.reg + ' ' + s.logActive : s.reg}>Регистрация</button>
                </div>
                <div>
                    <div className={auth ? s.content : s.disable}>
                        <div className={s.content__inner}>
                            <p className={activeErr? s.err + " " + s.activeErr : s.err}>Неверная почта или пароль</p>
                            <input className={s.input} placeholder="Почта" value={props.reducer.email} onChange={props.changeValueEmail}/>
                            <input className={s.input} placeholder="Пароль" value={props.reducer.password} onChange={props.changeValuePassword}/>
                            <label className={s.label}><input type="checkbox" /><p>Запомнить аккаунт</p></label>
                            <button onClick={handleClick}>Войти</button>
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