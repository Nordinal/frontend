import s from './Section10.module.css'
import bg from '../../../img/section10.png'
import InputMask from 'react-input-mask';

const Section10 = () => {

    return (
        <div className={s.bg} id="section10">
        <img src={bg} className={s.imgBg}/>
            <div className={s.container}>
                <h2>Оставьте свои контактные данные и наш сотрудник свяжется с вами</h2>
                <input placeholder="Имя и Фамилия"/>
                <InputMask  mask="+7(\999) 999 99 99" placeholder="Телефон"/>
                <textarea placeholder="Сообщение"/>
                <button>Отправить</button>
            </div>
        </div>
    )
};

export default Section10;