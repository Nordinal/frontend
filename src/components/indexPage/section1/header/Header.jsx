import s from './Header.module.css'
import logo from '../../../../img/logo.svg'
import profile from '../../../../img/profile.svg'
import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
        <div className={s.main}>
            <a href=''><img src={logo} alt='логотип' className={s.logo}/></a>
            <nav>
                <a href='' className={s.link}>О нас</a>
                <a href='' className={s.link}>Целевое обучени</a>
                <a href='' className={s.link}>Партнеры</a>
                <a href='' className={s.link}>Предложения</a>
                <a href='' className={s.link}>Продукция</a>
                <a href='' className={s.link}>Тесты</a>
            </nav>
            <NavLink to='/auth'><img src={profile} alt='профиль' className={s.profile}/></NavLink>
        </div>
    );
}

export default Header;