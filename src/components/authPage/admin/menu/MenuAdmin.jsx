import { useState } from "react";
import { NavLink } from "react-router-dom"
import s from "./MenuAdmin.module.css"


const MenuAdmin = (props) => {
    const [toggle, setToggle] = useState(true);

    return ( <>
        <div className={s.top}>
                <div onClick={() => setToggle(true)} className={toggle ? s.change + " " + s.topBtn + " " + s.active : s.change + " " + s.topBtn}>Редактирование</div>
                <div onClick={() => setToggle(false)} className={!toggle ? s.view + " " + s.topBtn + " " + s.active : s.view + " " + s.topBtn}>Просмотр</div>
        </div>
        <NavLink to="/auth/admin/" className={s.exit}>🠒</NavLink>
        {toggle ? 
            <div className={s.list}>
                <NavLink to="/auth/admin/request" className={s.link}>Теги о ЗИД</NavLink>
                <NavLink to="/auth/admin/request"className={s.link}>О нас</NavLink>
                <NavLink to="/auth/admin/request" className={s.link}>Мы предлагаем</NavLink>
                <NavLink to="/auth/admin/request"className={s.link}>Институты и направления</NavLink>
            </div>
            :
            <div className={s.list}>
                <NavLink to="/auth/admin/request" className={s.link}>Теги о ЗИД</NavLink>
                <NavLink to="/auth/admin/request" className={s.link}>Заявки</NavLink>
                <NavLink to="/auth/admin/request" className={s.link}>Чаты</NavLink>
                <NavLink to="/auth/admin/request"className={s.link}>Статистика</NavLink>
            </div>
        }
        </>
    )
}

export default MenuAdmin