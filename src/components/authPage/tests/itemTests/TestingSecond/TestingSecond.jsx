import { useEffect } from 'react';
import { useState } from 'react';
import s from './TestingSecond.module.css'


const TestingSecond = (props) => {
    const [active, setActive] = useState(0);
    const [exitTest, setExitTest] = useState(false);
    const [rigth, setRigth] = useState(0);

    const handleClick = (index) => {
        if(props.tests.questionsList[active].currectAnswer == index){
            const inc = rigth + 1;
            setRigth(inc);
        }
        props.updateResult(index, active);
        if(active == props.tests.questionsList.length - 1){
            setExitTest(true);
            localStorage.setItem('test2', true)
        }
        else{
            const inc = active + 1;
            setActive(inc);
        }
    }
    return (
        <div>
            <div className={s.container}>
                <div className={s.top}>
                    <p>Тест по истории завода</p>
                    <div onClick={() => props.exitTest(props.index)}>🠒</div>
                </div>
                {!exitTest ? 
                <ItemQuestion test={props.tests.questionsList[active]} handleClick={index => handleClick(index)}/>
                :
                <div>
                <p className={s.btn}>{rigth} правильных из {props.tests.questionsList.length}</p>
                {props.tests.questionsList.map((item, index) => <ItemRequestion test={item} />)}
                </div>
                }
                <div className={s.bottom}>
                    <p>{active + 1}/{props.tests.questionsList.length}</p>
                </div>
            </div>
        </div>
    )
}

const ItemRequestion = (props) => {
    const [isRigth, setIsRigth] = useState(false);
    useEffect(() => {
        if(props.test.currectAnswer == props.test.answer){
            setIsRigth(true);
        }
        else{
            setIsRigth(false)
        }
    }, [])
    return (
        <div>
            <p className={isRigth ? s.title + " " + s.green : s.title + " " + s.red}>{props.test.question}</p>
            <div className={s.body}>
                <img src={props.test.currectImg} className={s.img}/>
                <div className={s.btn}>Правильный ответ: {props.test.choice[props.test.currectAnswer]}</div>
                <div className={s.btn}>Ваш ответ: {props.test.choice[props.test.answer]}</div>
            </div>
        </div>
    )
}

const ItemQuestion = (props) => {
    return (
        <div>
            <p className={s.title}>{props.test.question}</p>
            <div className={s.body}>
                <img src={props.test.img} className={s.img}/>
                <button className={s.btn + " " + s.btnActive} onClick={() => props.handleClick(0)}>{props.test.choice[0]}</button>
                <button className={s.btn + " " + s.btnActive} onClick={() => props.handleClick(1)}>{props.test.choice[1]}</button>
                <button className={s.btn + " " + s.btnActive} onClick={() => props.handleClick(2)}>{props.test.choice[2]}</button>
                <button className={s.btn + " " + s.btnActive} onClick={() => props.handleClick(3)}>{props.test.choice[3]}</button>
            </div>
        </div>
    )
}
export default TestingSecond;