import Modal from '../../modal/Modal'
import s from './Section5.module.css'
import vector from '../../../img/vector.svg'
import {useState, useEffect} from 'react'
import Institute from './institute/Institute'
import Direction from './direction/Direction'
import * as axios from 'axios'
import MainSection from './mainSection/MainSection'
import SecondSection from './secondSection/SecondSection'
import ThreeSection from './threeSection/ThreeSection'
import FourSection from './fourSection/FourSection'


const Section5 = (props) => {
    const direction = props.reducer.institute[props.reducer.active].direction;
    const [count, setCount] = useState(1); 

    const  setCountFunc = (k) => {
        setCount(k);
    }
    return (
        <div className={s.container} id="section5">
            {
                count === 1 ? 
                <MainSection setCount={setCountFunc}/>
                : count === 2 ? 
                <SecondSection count={count} {...props} setCount={setCountFunc}/>
                : count === 3 ? 
                <ThreeSection count={count} {...props} setCount={setCountFunc} />
                : count === 4 ?
                <FourSection count={count} {...props} setCount={setCountFunc} />
                : false
            }

            {/* 
            {direction.map( (item, index) => <Modal active={isActive[index]} setActive={() => {
                setIsActive(direction.map(() => false));
                document.body.style.overflow = "visible";
            }} key={index}>{item.modal}</Modal>)}
            {institute.map( (item, index) => <Modal active={isActiveModal[index]} setActive={() => {
                setIsActiveModal(institute.map( () => false))
                document.body.style.overflow = "visible";
            }} key={index}>{item.instituteModal}</Modal>)} */}
        </div>
    )
}

export default Section5;