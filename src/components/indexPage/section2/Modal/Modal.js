import s from './Modal.module.css'



const ModalSection2 = ({getModal, changeInput, value, changeTegPerson}) => {
    
    return (
        <div className={s.container} onClick={getModal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.exit} onClick={getModal}>X</div>
                <p>Напишите тег:</p>
                <input value={value} onChange={changeInput}/>
                <button onClick={(e) => {
                    changeTegPerson();
                    getModal();
                }}>Отправить</button>
            </div>
        </div>
    )
}

export default ModalSection2;