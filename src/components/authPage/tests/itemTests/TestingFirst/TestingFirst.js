import { useEffect, useState } from 'react'
import s from './TestingFirst.module.css'
import demo from '../../../../../img/testsDemo.svg'


const TestingFirst = (props) => {
    let [result, setResult] = useState({
        title: "",
        desc: "",
    })
    const [thatAll, setThatAll] = useState(false);
    useEffect(()=>{
        return function() {
            props.initResult(props.currentItem)
        }
    },[]);

    let [count, setCount] = useState(0);
    const handleClickTrue = () => {
        let bool = true;
        return handleClick(bool)
    }
    const handleClickFalse = () => {
        let bool = false;
        return handleClick(bool)
    }
    const handleClick = (bool) => {
        document.querySelectorAll('.' + s.title).forEach(item => {
            item.classList.remove(s.anim); 
            setTimeout(() => {
                item.classList.add(s.anim)
            },0)
        })
        if(count < props.tests.questionsList.length - 1){
            props.updateResponse(bool, count, props.currentItem);
            setCount(++count);
        }else{
            props.updateResponse(bool, count, props.currentItem);
            setCount(++count);
            let max = Math.max(...props.tests.result);
            console.log(max)
            if(max == 0){
                setResult({
                    title: "Вы ни разу не нажали кнопку да :(",
                    desc: "Пожалуйста, пройдите тест еще раз."
                })
            }
            else{
                for(let i = 0; i <= props.tests.result.length; i++){
                    if(props.tests.result[i] === max){
                        setResult(props.tests.responseList[i]);
                    }
                }
            }
            setThatAll(true)
        }
    }
    return (
        <div>
            {thatAll ? 
                <div className={s.container}>
                <div className={s.top}>
                    <p>{props.tests.name}</p>
                    <div onClick={() => props.initResult(props.currentItem)}>🠒</div>
                </div>
                <p className={s.title}>{result.title}</p>
                <div className={s.bodyResult}>
                    <p>{result.desc}</p>
                </div>
                <div className={s.bottom}>
                    <p>{count}/{props.tests.questionsList.length}</p>
                </div>
            </div>
            :
                <div className={s.container}>
                    <div className={s.top}>
                        <p>{props.tests.name}</p>
                        <div onClick={() => props.initResult(props.currentItem)}>🠒</div>
                    </div>
                    <p className={s.title}>{props.tests.questionsList[count].title}</p>
                    <div className={s.body}>
                        <img src={demo} className={s.img}/>
                        <div>
                            <button onClick={handleClickTrue} className={s.btn}>Да</button>
                            <button onClick={handleClickFalse} className={s.btn}>Нет</button>
                        </div>
                    </div>
                    <div className={s.bottom}>
                        <p>{count}/{props.tests.questionsList.length}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default TestingFirst;