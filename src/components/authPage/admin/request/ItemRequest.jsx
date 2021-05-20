import s from './ItemRequest.module.css'
import check from '../../../../img/check.svg'
import del from '../../../../img/delete.svg'


const ItemRequest = (props) => {
    return(
        <div className={s.container}>
            <p><span className={s.b}>Имя и Фамилия:</span> {props.name}</p>
            <p><span className={s.b}>Телефон:</span> {props.tel}</p>
            <p><span className={s.b}>Сообщение:</span> {props.message}</p>
            <div className={!props.status ? s.control : s.disable}>
                <img src={check} className={s.check} onClick={() => {
                    props.updateStatusRequest(props.id);
                    }} />
                <img src={del} className={s.del} onClick={() => {
                    props.deleteRequest(props.id);
                    }}/>
            </div>
        </div>
    )
}

export default ItemRequest;