import s from "./MainSection.module.css"
import pather from '../../../../img/pather.png'
import backImg from "../../../../img/mainSection5.png"

const MainSection = (props) => {

    return (
        <div className={s.bgColor}>
                <div className={s.container}>
                    <p className={s.title}>Пройди три простых шага, и начни учиться в хорошем ВУЗе по целевому направлению</p>
                    <button className={s.btn} onClick={() => props.setCount(2)}>Начни свой путь</button>
                    <p className={s.bottom}>Наши партнеры</p>
                    <div><img src={pather} className={s.pather} alt="институты"/></div>
                    <img src={backImg} alt="назад" className={s.bgImage}></img>
                </div>
        </div>
    )
}


export default MainSection;