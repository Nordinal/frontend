import s from './ModalHeader.module.css'
import {useState, useEffect} from 'react'
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router';
import {user} from '../../../../api/initApi'


const ModalHeader = (props) => {
    useEffect(() => {
        document.body.style.position = 'fixed';
        return () => {
            document.body.style.position = '';
        }
    }, [])
    useEffect(() => {
        if(props.reducer.isLoggin){
            history.push("/auth/profile");  
        }
    }, [props.reducer.isLoggin])

    const [auth, setAuth] = useState(true);
    const [activeErr, setActiveErr] = useState(false);
    let history = useHistory();

    const handleClick = () => {
        user.check(props.reducer).then((res) => {
            if(res.data == false){
                setActiveErr(true);
                props.submitFalse();
            }
            else{
                setActiveErr(false);
                let {email, tel, id} = res.data;
                props.submit(email, tel, id);
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
                            <input className={s.input} type="password" placeholder="Пароль" value={props.reducer.password} onChange={props.changeValuePassword}/>
                            <button onClick={handleClick}>Войти</button>
                        </div>
                    </div>
                    <div className={!auth ? s.content : s.disable}>
                        <div className={s.content__inner}>
                            <p className={s.err + " " + s.activeErr}>{props.reducer.message}</p>
                            <input className={s.input} placeholder="Почта" onChange={props.updateRegEmail}/>
                            <InputMask  mask="+7(\999) 999 99 99" placeholder="Телефон" className={s.input} onChange={props.updateRegTel}/>
                            <input className={s.input} type="password" placeholder="Пароль" onChange={props.updateRegPassword}/>
                            <input className={s.input} type="password" placeholder="Повтор пароля" onChange={props.updateRegPasswordAgain}/>
                            <button onClick={() => {
                                props.sendRegData();
                            }} disabled={props.reducer.isBlock}>Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalHeader;