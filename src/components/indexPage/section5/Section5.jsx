import Modal from '../../modal/Modal'
import s from './Section5.module.css'
import vector from '../../../img/vector.svg'
import {useState} from 'react'
import Institute from './institute/Institute'
import Direction from './direction/Direction'


const Section5 = (props) => {
    const direction = props.reducer.institute[props.reducer.active].direction;
    const active = props.reducer.active;

    const [isActive, setIsActive] = useState(direction.map( () => false));
    console.log(isActive);


    return (
        <div className={s.container}>
            <div>
                <h3 className={s.title}>Наши партнеры - ваше обучения<img src={vector} className={s.vector}/></h3>
            </div>
            <div className={s.instituteDiv}>
                {props.reducer.institute.map( (item, index) => <Institute updateActive={() => props.updateActive(index)} img={item.img} text={item.textBtn} isActive={active == index ? true : false} key={index}>{item.textBtn}</Institute>)}
            </div>
            <div className={s.between}>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle + ' ' + s.circleRed}></div>
                <div className={s.betweenText}>Целевые направления {props.reducer.institute[active].textBtn}</div>
            </div>
            <div className={s.directionDiv}>
                {direction.map( (item, index) => <Direction setIsActive={() => setIsActive(direction.map((e, i) => i == index ? true : false))} number={item.number} text={item.textBtn} key={index}>{item.textBtn}</Direction>)}
            </div>



            {direction.map( (item, index) => <Modal active={isActive[index]} setActive={() => {
                setIsActive(direction.map(() => false))
            }} key={index}>{item.modal}</Modal>)}
        </div>
    )
}

export default Section5;