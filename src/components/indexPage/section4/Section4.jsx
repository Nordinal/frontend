import s from './Section4.module.css'
import vector from '../../../img/vector.svg'
import s41 from '../../../img/section41.svg'
import s42 from '../../../img/section42.svg'
import s43 from '../../../img/section43.svg'
import s44 from '../../../img/section44.svg'

const Section4 = () => {
    return(
        <div className={s.container} id="section4">
            <div className={s.mainTextDiv}>
                <h3 className={s.mainText}>Целевое обучение - большое преимущество<img src={vector}/></h3>
            </div>
            <div className={s.main}>
                <div><img src={s41} className={s.img}/><p className={s.desc}>Зачисление до первой волны.
В случае неудачи сможете поступить с основным потоком</p></div>
                <div><img src={s42}/><p className={s.desc}>Бесплатное обучение. Обеспечение жильем и стипендией на время учебы</p></div>
                <div><img src={s43}/><p className={s.desc}>Гарантированное трудоустройство. Прохождение практики на “своем” предприятии</p></div>
                <div><img src={s44}/><p className={s.desc}>Проходи отдельный конкурс для “целевиков” </p></div>
            </div>
        </div>
    )
}

export default Section4;