import s from './Section3.module.css'
import vector from '../../../img/vector.svg'
import ItemSection3 from './ItemSection3/ItemSection3'
import {useState} from 'react'


const Section3 = (props) => {

    const [show, setShow] = useState(true);
    const showContent = () => {
        setShow(!show);
    }
    return (
            <div className={s.content} id="section3">
                <div className={s.container}>
                    <h3 className={s.mainText}>О нас<img src={vector} className={show ? s.vector : s.vector + " " + s.rotate} onClick={showContent}/></h3>
                </div>
                <div className={show ? s.items : s.items + " " + s.disable}>
                    {props.reducer.content.map( (item, index) => <ItemSection3 content={item} index={index}/>)}
                </div>
            </div>
    )
}

export default Section3;