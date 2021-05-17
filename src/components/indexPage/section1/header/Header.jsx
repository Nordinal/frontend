import s from './Header.module.css'
import logo from '../../../../img/logo.svg'
import profile from '../../../../img/profile.svg'
import { NavLink, useHistory } from 'react-router-dom'
import {useState} from 'react'
import ModalHeaderContainer from './ModalHeaderContainer'
import { useEffect } from 'react'


const Header = (props) => {
    const [isActiveModal,setisActiveModal] = useState(false);
    const [activeBurger, setActiveBurger] = useState(false);
    let nav;
    let btnExit;
    let bgBurger;
    
    if(activeBurger){
        nav = s.burgerNav;
        btnExit = s.btnExit;
        bgBurger = s.bgBurger;
    }
    else{
        nav = s.nav;
        btnExit = s.disable;
        bgBurger = s.disable;
    }
    let history = useHistory();
    const handleClick = () =>{
        if(props.auth.isLoggin == true){
            history.push("/auth/profile")
        }
        else{
            setisActiveModal(true)
        }
    }
    const activeBurgers = () => {
        let active = activeBurger
        setActiveBurger(!active);
    }
    return (
        <div className={s.main}>
            <a href=''><img src={logo} alt='логотип' className={s.logo}/></a>
            <nav className={nav} onClick={(e) =>{
                e.stopPropagation();
            }}>
                <a href='#section3' className={s.link} onClick={activeBurger ? activeBurgers : false}>О нас</a>
                <a href='#section7' className={s.link} onClick={activeBurger ? activeBurgers : false}>Предложения</a>
                <a href='#section4' className={s.link} onClick={activeBurger ? activeBurgers : false}>Преимущества</a>
                <a href='#section5' className={s.link} onClick={activeBurger ? activeBurgers : false}>Целевое обучени</a>
                <a href='#section9' className={s.link} onClick={activeBurger ? activeBurgers : false}>Тесты</a>
                <button className={btnExit} onClick={activeBurgers}>Закрыть</button>
            </nav>
            <div className={s.log}>
                <div className={s.burger} onClick={activeBurgers}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button className={s.btn} onClick={handleClick}><img src={profile} alt='профиль' className={s.profile} className={s.loggin} /></button>
            </div>
            <div className={bgBurger} onClick={activeBurgers}></div>
            <ModalHeaderContainer isActiveModal={isActiveModal} setIsActiveModal={() => setisActiveModal(false)}/>
        </div>
    );
}

export default Header;