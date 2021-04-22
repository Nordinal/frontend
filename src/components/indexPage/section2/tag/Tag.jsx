import s from './Tag.module.css'
import like from '../../../../img/like.svg'
import {useState} from 'react'

const Tag = (props) => {
    const [active, setActive] = useState(false);
    
    return (
        <div className={s.container}>
            <div className={active ? s.last + " " + s.active : s.last} onClick={() => setActive(!active)}>
                {props.reducer}
                <div className={active ? s.like + " " + s.activeLike : s.like}>
                    <img src={like} alt='like'/>
                </div>
            </div>
        </div>
    )

}

export default Tag;