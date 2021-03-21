import s from './Modal.module.css'


const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? s.container + ' ' + s.active : s.container} onClick={setActive}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.imgDiv}>{children.imgsModal.map((item, index) => <img src={item} key={index} className={s.img}/>)}</div>
                <div>{children.textModal}</div>
            </div>
        </div>
    )
}

export default Modal;