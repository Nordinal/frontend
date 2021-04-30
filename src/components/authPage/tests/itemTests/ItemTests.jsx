import s from "./ItemTests.module.css"
import question from '../../../../img/question.svg'

const ItemTest = (props) => {
    return(
        <div className={s.container}>
            <div className={s.container__rigth}>
                <p>{props.name}</p>
                <p><img src={question} className={s.que}/></p>
                <p>{props.questions}</p>
            </div>
            <div className={s.progress}></div>
        </div>
    )
}

export default ItemTest