import s from './ItemSection3.module.css'

const ItemSection3 = (props) => {
    if(props.index % 2 == 0){
        return(
            <div className={s.content}>
                <div className={s.container}>
                    <div className={s.rigth}>
                        <h4 className={s.mainText}>{props.content.main}</h4>
                        <p className={s.descText}>{props.content.desc}</p>
                    </div>
                    <div className={s.imageDiv}>
                        <img src={props.content.image} className={s.image}/>
                        <p className={s.descImage}>{props.content.descImage}</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={s.contentr}>
                <div className={s.container}>
                    <div className={s.imageDiv}>
                        <img src={props.content.image} className={s.image}/>
                        <p className={s.descImage}>{props.content.descImage}</p>
                    </div>
                    <div className={s.left}>
                        <h4 className={s.mainText}>{props.content.main}</h4>
                        <p className={s.descText}>{props.content.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemSection3;