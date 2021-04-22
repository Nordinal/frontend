import s from './Modal.module.css'
import exit from '../../img/exit.svg'
import Parse from 'html-react-parser'



const Modal = ({active, setActive, children}) => {
    if(active){
        document.body.style.overflow = "hidden";
    }
    return (
        <div className={active ? s.container + ' ' + s.active : s.container} onClick={setActive}>
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