import s from './ItemSection3.module.css'

const ItemSection3 = (props) => {
    const handleClick = () => {
        if(props.content.url != ''){
            window.open(props.content.url);
        }
    }
    return(
        <div className={s.container} onClick={handleClick}>
            <img src={props.content.image} className={s.bg}/>
            <div className={s.content}>
                <div className={s.content__top}><span className={s.title}>{props.content.name}</span><span className={s.details}>Подробнее</span></div>
                <div className={s.content__bottom}><span className={s.desc}>{props.content.desc}</span><span>{props.content.nameUrl}</span></div>
            </div>
        </div>
    )
}

export default ItemSection3;