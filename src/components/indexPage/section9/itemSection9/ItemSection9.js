import s from './ItemSection9.module.css'
import question from '../../../../img/question.svg'
import ModalSection9 from './ModalSection9';
import {useState} from 'react'


const ItemSection9 = ({name, questions, current}) => {

    const [activeModule, setActiveModule] = useState(false);

    const onLoggin = () =>{
        activeModule ? setActiveModule(false) : setActiveModule(true)
    }

    return (
        <div className={s.container} onClick={onLoggin}>
        {activeModule ? <ModalSection9 onLoggin={onLoggin}/> : false}
            <div className={s.top}>
                <h3>{name}</h3>
            </div>
            <div className={s.bottom}>
                <div className={s.question}><img src={question} />{questions}</div>
                <div className={s.scale}></div>
            </div>
        </div>
    )
};

export default ItemSection9;