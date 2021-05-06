import s from './Institute.module.css'
import institute from '../../../../img/institute.svg'
import ReactDOM from 'react-dom'
import Modal from '../../../modal/Modal';
import { useState } from 'react';


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
                <img src={props.img} className={s.img}/>
            </div>
            <div className={props.isActive ? s.titleDiv + ' ' + s.active : s.titleDiv}>
                <span>{props.text}</span>
            </div>
            {active ? 
                    ReactDOM.createPortal(<Modal active={active} setActive={() => {
                        setActiveFunc(false);
                        document.body.style.overflow = "visible";
                    }} key={Math.random(0,1000)}>{props.instituteModal}</Modal>, document.getElementById('root')) : false}
        </div>
    )
}

export default Institute;