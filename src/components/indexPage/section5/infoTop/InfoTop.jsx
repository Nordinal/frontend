import s from './InfoTop.module.css'

const InfoTop = (props) => {
    let turn1 = s.turn;
    let turn2 = s.turn;
    let turn3 = s.turn;
    switch(props.count){
        case 2: {
            turn1 = s.turn + " " + s.active; 
            turn2 = s.turn + " " + s.dis;
            turn3 = s.turn + " " + s.dis;
            break;
        }
        case 3: {
            turn1 = s.turn + " " + s.passed; 
            turn2 = s.turn + " " + s.active;
            turn3 = s.turn + " " + s.dis;
            break;
        }
        case 4: {
            turn1 = s.turn + " " + s.passed; 
            turn2 = s.turn + " " + s.passed;
            turn3 = s.turn + " " + s.active;
            break;
        }
    }
    return(
        <div className={s.container}>
            <div className={turn1}>Шаг 1</div>
            <div className={s.circle}></div>
            <div className={s.circle}></div>
            <div className={s.circle}></div>
            <div className={turn2}>Шаг 2</div>
            <div className={s.circle}></div>
            <div className={s.circle}></div>
            <div className={s.circle}></div>
            <div className={turn3}>Шаг 3</div>
        </div>
    )
}

export default InfoTop;