import s from './Tags.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import i21 from '../../../../img/like.svg'

const Tags = (props) => {
    useEffect(()=> {
        props.initTags();
    }, [])
    return(
        <div>
            <div  className={s.top}>Теги</div>
            <NavLink to="/auth/admin/" className={s.exit}>🠒</NavLink>
            {props.reducer.tag.map((item, index) => <div className={s.tag}><p>{item.tag}</p><p className={s.p}>{item.like}<img src={i21} alt="like"/></p></div>)}
        </div>
    )
}

export default Tags