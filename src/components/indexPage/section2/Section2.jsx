import s from './Section2.module.css'
import Tag from './tag/Tag';
import i21 from '../../../img/plus.svg'
import React, {useState} from 'react'
import ModalSection2 from './Modal/Modal';


const Section2 = (props) => {
    const [activeModal, setActiveModal] = useState(false);
    
    const getModal = () => {
        setActiveModal(!activeModal);
    }

    return (
        <div className={s.container} id="section2">
            <h3 className={s.mainText}>Напишите свой тег о ЗИД</h3>
            <div className={s.tags}>
                {props.reducer.tag.map((item, index) => <Tag reducer={item} key={index}/>)}
                {props.reducer.tagPerson.map((item, index) => <Tag reducer={item} key={index}/>)}
                <img src={i21} className={s.plus} id="btn" onClick={getModal}/>
                {activeModal ? <ModalSection2 getModal={getModal} changeInput={props.changeInput} value={props.reducer.newTag} changeTegPerson={props.changeTegPerson}/>: false}
            </div>

        </div>
    );
}

export default Section2;