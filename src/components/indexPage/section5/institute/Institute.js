import s from './Institute.module.css'
import institute from '../../../../img/institute.svg'
import { useState } from 'react';
import ModalCreatePortal from '../../../modal/ModalCreatePortal'


const Institute = (props) => {
    const [active, setActive] = useState(false);
    const setActiveFunc = (bool) => {
        setActive(bool);
    }
    return (
        <div onClick={props.updateActive} className={s.container}>
            <img src={institute} className={s.institute} alt='Подробнее' onClick={(e) => {
                e.stopPropagation();
                setActiveFunc(true);
            }}/>
            <div className={s.imgDiv}>
                <img src={props.img} alt="Институт" className={s.img}/>
            </div>
            <div className={props.isActive ? s.titleDiv + ' ' + s.active : s.titleDiv}>
                <span>{props.text}</span>
            </div>
            <ModalCreatePortal inner={props.instituteModal} active={active} setActive={() => setActiveFunc(false)}/>
        </div>
    )
}

export default Institute;