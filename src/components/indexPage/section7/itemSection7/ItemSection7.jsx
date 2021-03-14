import s from './ItemSection7.module.css'


const ItemSection7 = ({name, img}) => {

    return (
        <div className={s.container}>
            <img src={img} className={s.img}/>
            <div className={s.content}>
                <div className={s.title}>{name}</div>
                <button className={s.btn}>Подробнее</button>
            </div>
        </div>
    )
}

export default ItemSection7;