import s from './Section11.module.css'
import logo from '../../../img/logo.svg'
import vk from '../../../img/vk.svg'
import facebook from '../../../img/facebook.svg'
import instagram from '../../../img/instagram.svg'
import youtube from '../../../img/youtube.svg'


const Section11 = () =>{

    return (
        <footer className={s.bg}>
            <div className={s.container}>
                <div className={s.logoDiv}>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={s.content}>
                    <div className={s.contentLeft}>
                        <h3>Контакты:</h3>
                        <p>Адрес: 601900 Россия, Владимирская область, г. Ковров, ул. Труда, дом 4.</p>
                        <p>Факс: (49232) 5-35-76</p>
                        <p>E-mail: zid@zid.ru</p>
                        <div className={s.social}>
                            <a target="_blank" href="https://vk.com/promo_zid" className={s.socials}><img src={vk} alt='vk'/></a>
                            <a target="_blank" href="https://www.facebook.com/promo.zid" className={s.socials}><img src={facebook} alt='facebook'/></a>
                            <a target="_blank" href="https://www.instagram.com/promo.zid/" className={s.socials}><img src={instagram} alt='instagram'/></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UC_SCIYbqdYmEc1GZPz_oehg" className={s.socials}><img src={youtube} alt='youtube'/></a>
                        </div>
                    </div>
                    <div className={s.navDiv}>
                        <h3>Навигация:</h3>
                        <nav className={s.nav}>
                            <a href='#section3'>О нас</a>
                            <a href='#section7'>Предложения</a>
                            <a href='#section8'>Продукция</a>
                            <a href='#section4'>Целевое направление</a>
                            <a href='#section5'>Партнеры</a>
                            <a href='#section9'>Тесты</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Section11;