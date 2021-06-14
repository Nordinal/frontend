import s from './ItemRequest.module.css'
import check from '../../../../img/check.svg'
import del from '../../../../img/delete.svg'
import { useState } from 'react'
import ReactDom from 'react-dom'


const ItemRequest = (props) => {
    const [modal, setModal] = useState(false)
    return(
        <div className={s.container}>
            <p><span className={s.b}>Имя и Фамилия:</span> {props.name}</p>
            <p><span className={s.b}>Телефон:</span> {props.tel}</p>
            <p><span className={s.b}>Сообщение:</span> {props.message}</p>
            <div className={s.control}>
                <div className={!props.status ? undefined : s.disable}>
                    <img src={check} className={s.check} alt="check" onClick={() => {
                        props.updateStatusRequest(props.id);
                        }} />
                </div>
                <img src={del} className={s.del} alt="delete" onClick={() => {
                    setModal(true);
                    }}/>
            </div>
            {modal ? ReactDom.createPortal(
            <div className={s.containerModal} onClick={() => setModal(false)}>
                <div className={s.content} onClick={(e) => e.stopPropagation()}>
                    <p className={s.titleModal}>Удалить заявку от {props.name}?</p>
                    <button className={s.btnModal + " " + s.green} onClick={() => {
                        props.deleteRequest(props.id);
                        setModal(false);
                    }}>Да</button>
                    <button className={s.btnModal + " " + s.red} onClick={() => setModal(false)}>Нет</button>
                </div>
            </div>, document.getElementById('root')) : undefined}
        </div>
    )
}

export default ItemRequest;

