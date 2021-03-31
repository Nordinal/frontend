import s from './Section3.module.css'
import vector from '../../../img/vector.svg'
import ItemSection3 from './ItemSection3/ItemSection3'


const Section3 = (props) => {
    return (
            <div className={s.content} id="section3">
                <div className={s.container}>
                    <h3 className={s.mainText}>О нас<img src={vector} className={s.vector}/></h3>
                </div>
                {props.reducer.content.map( (item, index) => <ItemSection3 content={item} index={index} />)}
            </div>
    )
}

export default Section3;