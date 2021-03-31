import s from './Section7.module.css'
import vector from '../../../img/vector.svg'
import ItemSection7 from './itemSection7/ItemSection7';

const Section7 = (props) => {
    return (
        <div className={s.container} id="section7">
            <h2 className={s.title}>Мы предлагаем<img src={vector} className={s.vector}/></h2>
            <div>
                {props.reducer.content.map((item, index) => <ItemSection7 name={item.name} img={item.img} key={index}/>)}
            </div>
        </div>
    )
}


export default Section7;
