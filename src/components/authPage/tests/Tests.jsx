
import ItemTest from "./itemTests/ItemTests"
import TestingFirst from "./itemTests/TestingFirst/TestingFirst"
import TestingSecond from "./itemTests/TestingSecond/TestingSecond"
import s from "./Tests.module.css"


const Tests = (props) => {
    let currentItem;
    const testIsBegin = () => {
        for(let i = 0; i < props.tests.content.length; i++){
            if(props.tests.content[i].isBegin === true){
                currentItem = i;
                return true;
            }
        }
        return false
    }
    return(
        <div className={s.container}>
            {testIsBegin() === false ? 
                props.tests.content.map((item, index) => <ItemTest toggleIsBegin={props.toggleIsBegin} reducer={item} index={index} key={index} isReady={index == 0 ? localStorage.getItem('test1'):localStorage.getItem('test2')}   
                />)
            :
                props.tests.content[currentItem].type === 1 ? 
                    <TestingFirst tests={props.tests.content[currentItem]} updateResponse={props.updateResponse} currentItem={currentItem} initResult={props.initResult} />
                    :
                    <TestingSecond tests={props.tests.content[currentItem]} index={currentItem} exitTest={props.exitTest} updateResult={props.updateResult}/>
            }
        </div>
    )
}

export default Tests;