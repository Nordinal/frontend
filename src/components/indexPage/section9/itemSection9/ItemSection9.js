import s from './ItemSection9.module.css'
import question from '../../../../img/question.svg'
import ModalSection9 from './ModalSection9';
import {useState} from 'react'
import { useHistory } from 'react-router';


const ItemSection9 = (props) => {

    const [activeModule, setActiveModule] = useState(false);
    let history = useHistory();

    const onLoggin = () =>{
        if(props.auth.isLoggin){
            props.toggleIsBegin(props.index)
            history.push("/auth/tests")
        }else{
            activeModule ? setActiveModule(false) : setActiveModule(true)
        }
    }

    return (
        <div className={s.container} onClick={onLoggin}>
        {activeModule ? <ModalSection9 onLoggin={onLoggin}/> : false}
            <div className={s.top}>
                <h3>{props.name}</h3>
            </div>
            <div className={s.bottom}>
                <div className={s.question}><img src={question} />{props.questions}</div>
                <div className={s.scale}></div>
            </div>
        </div>
    )
};

export default ItemSection9;