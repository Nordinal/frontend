import s from './ModalSection6.module.css'
import exit from '../../../../img/exit.svg'
import { useEffect } from 'react'

const ModalSection6 = ({setActiveModal, name, image}) => {
    
    useEffect(() => {
        let img = new Image();
        img.src = image;
        img.onload = () => document.querySelector('.' + s.content).append(img)
    }, [])
    return(
        <div className={s.container} onClick={setActiveModal}>
            <div className={s.title} onClick={(e) => e.stopPropagation()}>{name}<img src={exit}onClick={setActiveModal} />
            </div>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                
            </div>
        </div>
    )
}

export default ModalSection6;