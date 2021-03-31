import s from './Institute.module.css'
import institute from '../../../../img/institute.svg'


const Institute = ({updateActive, img, text, isActive, setIsActive}) => {
    return (
        <div onClick={updateActive} className={s.container}>
            <img src={institute} className={s.institute} alt='Подробнее' onClick={(e) => {
                e.stopPropagation();
                setIsActive();
            }}/>
            <div className={s.imgDiv}>
                <img src={img} className={s.img}/>
            </div>
            <div className={isActive ? s.titleDiv + ' ' + s.active : s.titleDiv}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Institute;