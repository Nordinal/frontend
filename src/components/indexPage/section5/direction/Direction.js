import s from './Direction.module.css'
import { useState } from 'react';
import ModalCreatePortal from '../../../modal/ModalCreatePortal';

const Direction = (props) => {
    let content = s.content;
    if(props.isActive){
        content += " " + s.active;
    }
    const [active, setActive] = useState(false);
    const setActiveFunc = (bool) => {
        setActive(bool);
    }
    return (
        <div className={s.container}>
            <div className={s.footer} onClick={(e) => {
                e.stopPropagation();
                setActiveFunc(true);
            }}>
                <span>Подробнее →</span>
            </div>
            <div className={content} onClick={props.updateTurn}>
                <span className={s.number}>{props.number}</span>
                <span>{props.text}</span>
            </div>
            <ModalCreatePortal inner={props.modal} active={active} setActive={() => setActiveFunc(false)}/>
        </div>
    )
};

export default Direction;