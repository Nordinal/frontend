import s from './Direction.module.css'


const Direction = ({setIsActive, number, text}) => {

    return (
        <div onClick={setIsActive} className={s.container}>
            <div className={s.content}>
                <span className={s.number}>{number}</span>
                <span>{text}</span>
            </div>
            <div className={s.footer}>
                <span>Подробнее →</span>
            </div>
        </div>
    )
};

export default Direction;