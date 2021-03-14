import Header from "./header/Header"
import s from './Section1.module.css'
import i11 from '../../../img/11.png'
import geo from '../../../img/geo.svg'
import v11 from '../../../video/11.mp4'


const Section1 = () => {

    return (
        <section className={s.content}>
            <div className={s.container}>
                <video autoplay="autoplay" muted="muted" loop="loop" id="myVideo" className={s.video}>
                    <source src={v11} type= "video/mp4"/>
                </video>
                <Header />
                <div className={s.main}>
                    <div className={s.leftContent}>
                        <h1 className={s.mainText}>Целевое обучение</h1>
                        <p className={s.descText}>ЗИД предоставляет возможность построения профессиональной карьеры по выбранному направлению подготовки или специальности вуза</p>
                        <div className={s.btnDiv}>
                        <a href='' className={s.btn}>Узнать подробнее</a>
                        </div>
                    </div>
                    <div className={s.rigthContent}>
                        <img src={i11} alt='Становись инженером' className={s.i11} />
                        <h2 className={s.imgText}>Становись инженером</h2>
                        <a href="" className={s.btnEngineer}>Инженеры🠒</a>
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