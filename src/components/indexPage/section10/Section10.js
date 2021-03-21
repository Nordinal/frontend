import s from './Section10.module.css'
import bg from '../../../img/section10.png'

const Section10 = () => {

    return (
        <div className={s.bg}>
        <img src={bg} className={s.imgBg}/>
            <div className={s.container}>
                <h2>Оставьте свои контактные данные и наш сотрудник свяжется с вами</h2>
                <input placeholder="Имя и Фамилия"/>
                <input placeholder="Телефон"/>
                <textarea placeholder="Сообщение"/>
                <button>Отправить</button>
            </div>
        </div>
    )
};

export default Section10;