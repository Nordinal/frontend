import Modal from '../../modal/Modal'
import s from './Section5.module.css'
import vector from '../../../img/vector.svg'
import {useState} from 'react'
import Institute from './institute/Institute'
import Direction from './direction/Direction'
import arrow from '../../../img/arrowSection5.svg'


const Section5 = (props) => {
    const direction = props.reducer.institute[props.reducer.active].direction;
    const active = props.reducer.active;

    const [isActive, setIsActive] = useState(direction.map( () => false));

    const institute = props.reducer.institute;
    console.log(institute[0].instituteModal);
    const [isActiveModal, setIsActiveModal] = useState(institute.map( () => false));
    return (
        <div className={s.container} id="section5">
            <div>
                <h3 className={s.title}>Начни обучение по целевому направлению<img src={vector} className={s.vector}/></h3>
                <p className={s.desc}>1. Выбери институт в котором хочешь обучаться<img src={arrow} className={s.arrow}/></p>
            </div>
            <div className={s.instituteDiv}>
                {props.reducer.institute.map( (item, index) => <Institute updateActive={() => props.updateActive(index)} img={item.img} text={item.textBtn} isActive={active == index ? true : false} key={index} setIsActive={() => setIsActiveModal(institute.map((e, i) => i == index ? true : false))}>{item.textBtn}</Institute>)}
            </div>
            <div className={s.between}>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle + ' ' + s.circleRed}></div>
                <div className={s.betweenText}>Целевые направления {props.reducer.institute[active].textBtn}</div>
            </div>
            <p className={s.desc + " " + s.descBottom}>2. Выбери направление института<img src={arrow} className={s.arrow}/></p>
            <div className={s.directionDiv}>
                {direction.map( (item, index) => <Direction setIsActive={() => setIsActive(direction.map((e, i) => i == index ? true : false))} number={item.number} text={item.textBtn} key={index}>{item.textBtn}</Direction>)}
            </div>



            {direction.map( (item, index) => <Modal active={isActive[index]} setActive={() => {
                setIsActive(direction.map(() => false));
                document.body.style.overflow = "visible";
            }} key={index}>{item.modal}</Modal>)}

            {institute.map( (item, index) => <Modal active={isActiveModal[index]} setActive={() => {
                setIsActiveModal(institute.map( () => false))
                document.body.style.overflow = "visible";
            }} key={index}>{item.instituteModal}</Modal>)}
        </div>
    )
}

export default Section5;