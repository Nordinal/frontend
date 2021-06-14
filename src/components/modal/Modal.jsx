import s from './Modal.module.css'
import exit from '../../img/exit.svg'
import Parse from 'html-react-parser'
import { useEffect } from 'react'



const Modal = ({active, setActive, children}) => {
    useEffect(() => {
        if(active){
            let pos = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = -pos + "px"
        }
    }, [active])
    return (
        <div className={s.container} onClick={() => {
                setActive(false);
            }}>
            <div className={s.title} onClick={(e) => e.stopPropagation()}>{children.titleModal}<img src={exit} alt="exit" onClick={(e) => {
                setActive(false)
            }}/></div>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.content__inner}>
                    <div className={s.imgDiv}>{children.imgsModal.map((item, index) => <img src={item} key={index} alt="Институт" className={s.img}/>)}</div>
                    <div className={s.text}>{Parse(children.textModal)}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;