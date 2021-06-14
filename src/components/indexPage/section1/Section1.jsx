import s from './Section1.module.css'
import i11 from '../../../img/11.png'
import geo from '../../../img/geo.svg'
import HeaderContainer from "./header/HeaderContainer"


const Section1 = () => {

    return (
        <section className={s.content}>
            <div className={s.container}>
                <HeaderContainer />
                <div className={s.main}>
                    <div className={s.leftContent}>
                        <h1 className={s.mainText}>Целевое обучение от ЗИД</h1>
                        <p className={s.descText}>ЗИД предоставляет возможность построения профессиональной карьеры по выбранной специальности вуза</p>
                        <div className={s.btnDiv}>
                        <a href='#section3' className={s.btn}>Узнать подробнее</a>
                        </div>
                    </div>
                    <div className={s.rigthContent}>
                        <img src={i11} alt='Становись инженером' className={s.i11} />
                        <h2 className={s.imgText}>Становись инженером</h2>
                        <a href="#section6" className={s.btnEngineer}>Инженеры🠒</a>
                    </div>
                </div>
                <div className={s.footer}>
                    <div className={s.geoDiv}>
                        <img src={geo} alt='Геолокация'/>
                    </div>
                    <div>
                        <p className={s.tel}>+7(900)764-89-23</p>
                        <p className={s.zid}>ОАО Завод им. В.А. Дегтярева</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;