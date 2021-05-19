import Direction from "../direction/Direction";
import InfoTop from "../infoTop/InfoTop"
import s from "./ThreeSection.module.css"
import arrow from '../../../../img/arrowItemSection5.svg'



const ThreeSection = (props) => {
    const direction = props.reducer.institute[props.reducer.active].direction;

    const handleClick = (bool) =>{
        if(bool){
            props.setCount(4);
        }
        else{
            props.setCount(2);
        }
    }
    return ( 
        <div className={s.bg}>
            <div className={s.container}>
                <div className={s.info}>
                    <InfoTop count={props.count}/>
                </div>
                <p className={s.title}>Выбери направление по которому хочешь обучаться в этом институте</p>
                <div className={s.items}>
                    {direction.map( (item, index) => <Direction modal={direction[index].modal}  updateTurn={() => props.updateTurn(index)} isActive={props.reducer.activeTurn === index ? true : false} number={item.number} text={item.textBtn} key={index}>{item.textBtn}</Direction>)}
                </div>
                <div className={s.bottom}>
                    <button className={s.btnBack} onClick={() => handleClick(false)}><img src={arrow} /></button>
                    <button className={s.btn} onClick={() => handleClick(true)}>Выбрать</button>
                </div>
            </div>
        </div>
    )
}

export default ThreeSection;