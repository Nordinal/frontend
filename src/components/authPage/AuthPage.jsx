import s from "./AuthPage.module.css"
import logo from '../../img/logo.svg'
import exitAuth from '../../img/exitAuth.svg'
import { NavLink, Route, useHistory } from "react-router-dom"
import ProfileContainer from "./profile/ProfileContainer"
import TestsContainer from "./tests/TestsContainer"
import { useEffect, useState } from "react"
import AdminContainer from "./admin/AdminContainer"
import Section10Container from '../indexPage/section10/Section10Container'
import {user} from '../../api/initApi'

const AuthPage = (props) => {
    const [isAdmin, setIsAdmin] = useState(false);
    let history = useHistory();
    const handleClick = () => {
        history.push("/")
        props.submitFalse();
    }
    const changeActiveLink = (e) => {
        console.log(e.target)
    }
    useEffect(()=>{
        if(!localStorage.getItem("id")){
            history.push("/")
        }
        document.body.style.backgroundColor = "#F2F2F2"
        return () => document.body.style.backgroundColor = "#fff"
    }, [])
    useEffect(async ()=>{
        const result = await user.isAdmin(props.auth.currentID);
        if(result.data){
            setIsAdmin(true);
        }
        else{
            setIsAdmin(false);
        }
        return () => setIsAdmin(false);
    })
    return(
        <div className={s.container}>
            <header className={s.header}>
                <div className={s.header__rigth}>
                    <p className={s.logo} onClick={() => history.push("/")}><img src={logo} className={s.logo__image}/></p>
                    <div className={s.data}>
                        <p className={s.data__title}>Личный кабинет:</p>
                        <p className={s.data__email}>{props.auth.currentEmail}</p>
                        <p className={s.data__number}>{props.auth.currentTel}</p>
                    </div>
                </div>
                <div>
                    <button className={s.btnExit} onClick={handleClick}><img src={exitAuth} /></button>
                </div>
            </header>
            <main className={s.main}>
                <section className={s.nav}>
                    <NavLink activeClassName={s.active} to="/auth/profile" className={s.nav__link} >Личные данные</NavLink>
                    <NavLink activeClassName={s.active}  to="/auth/tests" className={s.nav__link} >Тесты</NavLink>
                    <NavLink activeClassName={s.active}  to="/auth/feedback" className={s.nav__link} >Обратная связь</NavLink>
                    {isAdmin ?
                    <NavLink activeClassName={s.active}  to="/auth/admin" className={s.nav__link} >Администрирование</NavLink> : undefined}
                </section>
                <section className={s.content}>
                    <Route path='/auth/profile' render={() => <ProfileContainer />} />
                    <Route path="/auth/tests" render={() => <TestsContainer />} />
                    <Route path='/auth/feedback' render={() => <Section10Container admin={true}/>} />
                    {isAdmin ? <Route path="/auth/admin" render={() => <AdminContainer />} /> : undefined}
                    
                </section>
            </main>
        </div>
    )
}

export default AuthPage;