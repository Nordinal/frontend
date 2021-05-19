import s from './ModalSection10.module.css'


const ModalSection10 = (props) => {
    return(
        <div className={s.container} onClick={props.closeModal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}><div className={s.exit} onClick={props.closeModal}>X</div>{props.message}</div>
        </div>
    )
}

export default ModalSection10