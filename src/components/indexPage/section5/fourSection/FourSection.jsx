import InfoTop from '../infoTop/InfoTop'
import s from './FourSection.module.css'
import arrow from '../../../../img/arrowItemSection5.svg'
import turn from '../../../../img/fourSectionTurn.svg'
import InputMask from 'react-input-mask';
import Section10Container from '../../section10/Section10Container'
import { useState } from 'react';

const FourSection = (props) => {
    const inst = props.reducer.institute[props.reducer.active];
    const direct = inst.direction[props.reducer.activeTurn];
    const handleClick = (bool) =>{
        if(bool){
            
        }
        else{
            props.setCount(3);
        }
    }
    const [countTextarea, setCountTextarea] = useState(0);
    const handleClickTextarea = (e) => {
        props.updateMessage(e.target.value);
        setCountTextarea(e.target.value.length);
    }
    return(
        <div className={s.bg}>
            <div className={s.container1}>
                <div className={s.info}>
                    <InfoTop count={props.count}/>
                </div>
                <div className={s.items}>
                    <div>
                        <p className={s.title}>Отличный выбор</p>
                        <div className={s.leftContent}>
                            <div className={s.leftContent__item}><div className={s.widthImg}><img src={inst.img} className={s.image}/></div>{inst.textBtn}</div>
                            <div className={s.leftContent__item}><img src={turn} className={s.image + " " + s.widthImg}/><div className={s.cont}><p>{direct.textBtn}</p><p>{direct.number}</p></div></div>
                        </div>
                    </div>
                    <div>
                        <p className={s.title}>Оставь заявку и мы тебе перезвоним</p>
                        <div className={s.container}>
                            <input placeholder="Имя и Фамилия" className={s.elem} value={props.reducer.name} onChange={(e) => props.updateName(e.target.value)}/>
                            <InputMask  mask="+7(\999) 999 99 99" placeholder="Телефон" className={s.elem} value={props.reducer.tel} onChange={(e) => props.updateTel(e.target.value)} />
                            <textarea placeholder="Сообщение" className={s.elem} value={props.reducer.message} onChange={(e) => handleClickTextarea(e)}/>
                            <p className={s.count}>{countTextarea}/350</p>
                        </div>
                    </div>
                </div>
                <div className={s.bottom}>
                    <button className={s.btnBack} onClick={() => handleClick(false)}><img src={arrow} /></button>
                    <button className={s.btn} onClick={() => {
                        props.addMessage();
                        setCountTextarea(0);
                    }} disabled={props.reducer.isFetching}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


export default FourSection;