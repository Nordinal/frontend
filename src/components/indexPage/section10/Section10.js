import s from './Section10.module.css'
import bg from '../../../img/section10.jpg'
import InputMask from 'react-input-mask';
import ModalSection10 from './ModalSection10'
import { useState } from 'react';


const Section10 = (props) => {
    const [countTextarea, setCountTextarea] = useState(0);
    const handleClickTextarea = (e) => {
        props.updateMessage(e.target.value);
        setCountTextarea(e.target.value.length);
    }
    return (
        <>
            {props.disable ? false 
            : 
            <div className={s.bg} id="section10">
                <img src={bg} className={s.imgBg}/>
                <div className={s.container}>
                    <h2>Оставьте свои контактные данные и наш сотрудник свяжется с вами</h2>
                    <input placeholder="Имя и Фамилия" value={props.reducer.name} onChange={(e) => props.updateName(e.target.value)}/>
                    <InputMask  mask="+7(\999) 999 99 99" placeholder="Телефон" value={props.reducer.tel} onChange={(e) => props.updateTel(e.target.value)}/>
                    <div className={s.block}>
                        <textarea placeholder="Сообщение" value={props.reducer.message} onChange={(e) => handleClickTextarea(e)} className={s.textarea}/>
                        <p className={s.count}>{countTextarea}/350</p>
                    </div>
                    <button onClick={() => {
                        props.addMessage();
                        setCountTextarea(0);
                    }} disabled={props.reducer.isFetching}>Отправить</button>
                </div>
            </div>
            }
            {props.reducer.isOpenModal ? 
            <ModalSection10 message={props.reducer.messageModal} closeModal={() => props.closeModal()}/>
            :
            false
            }
        </>
    )
};

export default Section10;