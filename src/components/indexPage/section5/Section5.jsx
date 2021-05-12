import s from './Section5.module.css'
import {useState, useEffect} from 'react'
import MainSection from './mainSection/MainSection'
import SecondSection from './secondSection/SecondSection'
import ThreeSection from './threeSection/ThreeSection'
import FourSection from './fourSection/FourSection'
import {CSSTransition} from 'react-transition-group'
import { disableSection10 } from '../section10/Section10Container'

const Section5 = (props) => {
    const direction = props.reducer.institute[props.reducer.active].direction;
    const [count, setCount] = useState(1); 
    const [foo, setFoo] = useState(1);
    const [anim, setAnim] = useState(false);
    const  setCountFunc = (k) => {
        if(k === 2){
            props.disableSection10();
        }
        setAnim(true);
        setFoo(k);
    }
    return (
        <div className={s.container} id="section5">
            <CSSTransition 
                classNames={{
                    enter: s.contentEnter,
                    enterActive: s.contentEnterActive,
                    exit: s.contentExit,
                    exitActive: s.contentExitActive,
                }}
                in={anim}
                timeout={500}
                onEntered={() =>{
                    setAnim(false);
                }}
                onExited={() => {
                    setCount(foo);
                }}
            >
                <div className={s.content}>
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
                </div>
            </CSSTransition>
        </div>
        
    )
}

export default Section5;