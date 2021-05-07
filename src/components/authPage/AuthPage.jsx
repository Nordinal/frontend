import s from "./AuthPage.module.css"
import logo from '../../img/logo.svg'
import exitAuth from '../../img/exitAuth.svg'
import { NavLink, Route, useHistory } from "react-router-dom"
import ProfileContainer from "./profile/ProfileContainer"
import TestsContainer from "./tests/TestsContainer"
import { useEffect, useState } from "react"

const AuthPage = (props) => {
    let history = useHistory();
    const handleClick = () => {
        history.push("/")
        props.submitFalse();
    }
    const changeActiveLink = (e) => {
        console.log(e.target)
    }
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
                </section>
                <section>
                    <Route path='/auth/profile' render={() => <ProfileContainer />} />
                    <Route path="/auth/tests" render={() => <TestsContainer />} />
                    {/* <Route path='/auth/feedback' render={() => <AuthPage />} /> */}
                </section>
            </main>
        </div>
    )
}

export default AuthPage;