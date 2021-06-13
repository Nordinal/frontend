import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ItemRequest from './ItemRequest';
import s from './Request.module.css'


const Request = (props) => {
    useEffect(() =>{
        props.initRequest();
    }, []);
    const [toggle, setToggle] = useState(true)
    return (<div className={s.container}>
        <div className={s.top}>
            <div className={toggle ? s.act + " " + s.active : s.act} onClick={() => setToggle(true)}>Активные</div>
            <div className={!toggle ? s.all + " " + s.active : s.all} onClick={() => setToggle(false)}>Рассмотренные</div>
        </div>
        <NavLink to="/auth/admin/" className={s.exit}>🠒</NavLink>
        {toggle ? 
        props.reducer.content.map((item, index) => !item.status ?<ItemRequest name={item.name} tel={item.tel} message={item.message} status={item.status} id={item._id} updateStatusRequest={(id) => props.updateStatusRequest(id)} key={index} deleteRequest={props.deleteRequest}/> : undefined)
        :
        props.reducer.content.map((item, index) => item.status ? <ItemRequest name={item.name} tel={item.tel} message={item.message} status={item.status} id={item._id} key={index} deleteRequest={props.deleteRequest}/> : undefined)
        }
    </div>
    )
}


export default Request;