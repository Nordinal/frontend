import s from './ModalSection9.module.css'


const ModalSection9 = ({onLoggin}) => {
    return(
        <div className={s.container} onClick={onLoggin}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}><div className={s.exit}onClick={onLoggin}>X</div>Зарегестрируйтесь, прежде чем начать тест</div>
        </div>
    )
}

export default ModalSection9