import s from './ItemSection6.module.css'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import ModalSection6 from './ModalSection6';
import {CSSTransition} from 'react-transition-group'

const ItemSection6 = (props) => {
    const [activeModule, setActiveModule] = useState(false);
    return (
        <div>
            <div className={s.container} onClick={() => setActiveModule(true)}>
                <div><img src={props.img} alt="Профессия" className={s.img}/></div>
                <div className={s.desc}>{props.name}</div>
                <div className={s.details}>Подробнее →</div>
            </div>
            {ReactDOM.createPortal(<CSSTransition 
            in={activeModule}
            classNames={{
                enter: s.modalEnter,
                enterActive: s.modalEnterActive,
                exit: s.modalExit,
                exitActive: s.modalExitActive,
            }}
            timeout={500}
            unmountOnExit
        ><ModalSection6 setActiveModal={() => setActiveModule(false)} name={props.name} image={props.imageModal}/></CSSTransition>, document.getElementById('root'))}
        </div>
    )
}


export default ItemSection6;