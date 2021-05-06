import s from './Section7.module.css'
import vector from '../../../img/vector.svg'
import ItemSection7 from './itemSection7/ItemSection7';
import {useState, useEffect} from 'react'

const Section7 = (props) => {
    let [active, setActive] = useState(0);
    let [loop, setLoop] = useState();
    useEffect(() => {
        setLoop(setInterval(function(){
            setActive(active > 4 ? active = 0 : active++)
        }, 5000))
    }, [])
    return (
        <div className={s.container} id="section7">
            <h2 className={s.title}>Мы предлагаем<img src={vector} className={s.vector}/></h2>
            <p className={s.desc}>Развитие, поддержку и лучшее оборудование</p>
            <div className={s.items}>
                {props.reducer.content.map((item, index) => <ItemSection7 name={item.name} img={item.img} key={index} active={active == index ? true : false} setActive={setActive} index={index} clearTimer={() => clearInterval(loop)}/>)}
            </div>
        </div>
    )
}


export default Section7;