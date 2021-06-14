import s from './ModalSection6.module.css'
import exit from '../../../../img/exit.svg'

const ModalSection6 = ({setActiveModal, name, image}) => {
    

    return(
        <div className={s.container} onClick={setActiveModal}>
            <div className={s.title} onClick={(e) => e.stopPropagation()}>{name}<img src={exit} alt="exit" onClick={setActiveModal} />
            </div>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <img src={image} alt="Профессия"/>
            </div>
        </div>
    )
}

export default ModalSection6;