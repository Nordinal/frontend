import s from './Section2.module.css'
import Tag from './tag/Tag';
import i21 from '../../../img/plus.svg'
import React, {useEffect, useState} from 'react'
import ModalSection2 from './Modal/Modal';


const Section2 = (props) => {
    const [activeModal, setActiveModal] = useState(false);
    
    const getModal = () => {
        setActiveModal(!activeModal);
    }
    useEffect(()=> {
        props.initTags();
    }, [])

    return (
        <div className={s.container} id="section2">
            <h3 className={s.mainText}>Напишите свой тег о ЗИД</h3>
            <p className={s.desc}>Добавь одно слово, с которым у тебя ассоциируется ЗИД</p>
            <div className={s.tags}>
                {props.reducer.tag.map((item, index) => <Tag reducer={item} key={index} updateLikeTag={props.updateLikeTag} updateUnLikeTag={props.updateUnLikeTag} isFetching={props.reducer.isFetching} dataNew={true} setActiveTag={props.setActiveTag} initTagNotFetch={props.initTagNotFetch}/>)}
                {props.reducer.tagPerson.map((item, index) => <Tag reducer={item} key={index}/>)}
                <img src={i21} className={s.plus} id="btn" alt="plus" onClick={getModal}/>
                {activeModal ? <ModalSection2 getModal={getModal} changeInput={props.changeInput} value={props.reducer.newTag} changeTegPerson={props.changeTegPerson} />: false}
            </div>

        </div>
    );
}

export default Section2;