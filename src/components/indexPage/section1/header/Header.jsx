import s from './Header.module.css'
import logo from '../../../../img/logo.svg'
import profile from '../../../../img/profile.svg'
import { NavLink } from 'react-router-dom'
import ModalHeader from './ModalHeader'
import {useState} from 'react'


const Header = () => {

    const [isActiveModal,setisActiveModal] = useState(false);

    return (
        <div className={s.main}>
            <a href=''><img src={logo} alt='логотип' className={s.logo}/></a>
            <nav>
                <a href='#section3' className={s.link}>О нас</a>
                <a href='#section4' className={s.link}>Целевое обучени</a>
                <a href='#section5' className={s.link}>Партнеры</a>
                <a href='#section7' className={s.link}>Предложения</a>
                <a href='#section8' className={s.link}>Продукция</a>
                <a href='#section9' className={s.link}>Тесты</a>
            </nav>
            <button className={s.btn} onClick={() => setisActiveModal(true)}><img src={profile} alt='профиль' className={s.profile} className={s.loggin} /></button>

            <ModalHeader isActiveModal={isActiveModal} setIsActiveModal={() => setisActiveModal(false)}/>
        </div>
    );
}

export default Header;