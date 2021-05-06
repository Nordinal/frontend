import s from './Direction.module.css'
import ReactDOM from 'react-dom'
import Modal from '../../../modal/Modal';
import { useState } from 'react';

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
            {active ? 
                    ReactDOM.createPortal(<Modal active={active} setActive={() => {
                        setActiveFunc(false);
                        document.body.style.overflow = "visible";
                    }} key={Math.random(0,1000)}>{props.modal}</Modal>, document.getElementById('root')) : false}
        </div>
    )
};

export default Direction;