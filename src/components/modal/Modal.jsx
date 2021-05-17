import s from './Modal.module.css'
import exit from '../../img/exit.svg'
import Parse from 'html-react-parser'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useEffect, useState } from 'react'



const Modal = ({active, setActive, children}) => {
    useEffect(() => {
        if(active){
            let pos = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = -pos + "px"
        }
    }, [])
    return (
        <div className={s.container} onClick={() => {
                setActive(false);
            }}>
            <div className={s.title} onClick={(e) => e.stopPropagation()}>{children.titleModal}<img src={exit} onClick={(e) => {
                setActive(false)
            }}/></div>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.content__inner}>
                    <div className={s.imgDiv}>{children.imgsModal.map((item, index) => <img src={item} key={index} className={s.img}/>)}</div>
                    <div className={s.text}>{Parse(children.textModal)}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;