import s from './ItemSection8.module.css'


const ItemSection7 = ({title, text, img, url}) => {

    return (
        <div className={s.container}>
            <img src={img} className={s.img}/>
            <div className={s.content}>
                <div className={s.top}>
                    <div className={s.title}>{title}</div>
                    {url ? <a href={url} className={s.url} target="_blank">Видео</a> : false}
                </div>
                <div className={s.text}>{text}</div>
            </div>
        </div>
    )
}

export default ItemSection7;