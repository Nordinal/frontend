import ItemSection9 from './itemSection9/ItemSection9'
import s from './Section9.module.css'
import vector from '../../../img/vector.svg'

const Section9 = (props) =>{

    return (
        <div className={s.container} id="section9">
            <h2>Тесты<img src={vector} /></h2>
            <div className={s.content}>
                {props.reducer.content.map((item, index) => <ItemSection9 toggleIsBegin={props.toggleIsBegin}index={index} auth={props.auth} name={item.name} questions={item.questions}/>)}
            </div>
        </div>
    )
}

export default Section9;
