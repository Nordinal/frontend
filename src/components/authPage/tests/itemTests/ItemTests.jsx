import s from "./ItemTests.module.css"
import question from '../../../../img/question.svg'
import TestingFirst from "./TestingFirst/TestingFirst"

const ItemTest = (props) => {
    let handle = () => {
        props.toggleIsBegin(props.index);
    }
    return(
        <div className={s.container} onClick={handle}>
            <div className={s.container__rigth}>
                <p>{props.reducer.name}</p>
                <p><img src={question} className={s.que}/></p>
                <p className={s.countQuestion}>{props.reducer.questions}</p>
            </div>
            <div className={s.progress}></div>
        </div>
    )
}

export default ItemTest