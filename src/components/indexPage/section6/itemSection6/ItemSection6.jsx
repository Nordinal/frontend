import s from './ItemSection6.module.css'


const ItemSection6 = ({name, img}) => {

    return (
        <div>
            <div className={s.container} >
                <div><img src={img} className={s.img}/></div>
                <div className={s.desc}>{name}</div>
                <div className={s.details}>Подробнее →</div>
            </div>
        </div>
    )
}


export default ItemSection6;