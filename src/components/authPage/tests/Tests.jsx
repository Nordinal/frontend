import ItemTest from "./itemTests/ItemTests"
import s from "./Tests.module.css"


const Tests = (props) => {
    console.log(props)
    return(
        <div className={s.container}>
            {props.tests.content.map((item, index) => <ItemTest name={item.name} questions={item.questions} current={item.current}/>)}
        </div>
    )
}

export default Tests;