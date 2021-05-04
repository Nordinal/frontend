import { useEffect } from "react"
import { Route } from "react-router"
import ItemTest from "./itemTests/ItemTests"
import TestingFirst from "./itemTests/TestingFirst/TestingFirst"
import s from "./Tests.module.css"


const Tests = (props) => {
    let currentItem;
    const testIsBegin = () => {
        for(let i = 0; i < props.tests.content.length; i++){
            if(props.tests.content[i].isBegin == true){
                currentItem = i;
                return true;
            }
        }
        return false
    }
    return(
        <div className={s.container}>
            {testIsBegin() === false ? 
                props.tests.content.map((item, index) => <ItemTest toggleIsBegin={props.toggleIsBegin} reducer={item} index={index} key={index}/>)
            :
                props.tests.content[currentItem].type === 1 ? 
                    <TestingFirst tests={props.tests.content[currentItem]} updateResponse={props.updateResponse} currentItem={currentItem} initResult={props.initResult}/>
                    :
                    <div>В разработке</div>
            }
        </div>
    )
}

export default Tests;