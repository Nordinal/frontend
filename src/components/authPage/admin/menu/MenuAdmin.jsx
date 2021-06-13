import { useState } from "react";
import { NavLink } from "react-router-dom"
import s from "./MenuAdmin.module.css"


const MenuAdmin = (props) => {
    const [toggle, setToggle] = useState(false);

    return ( <>
        <div className={s.top}>
                {/* <div onClick={() => setToggle(true)} className={toggle ? s.change + " " + s.topBtn + " " + s.active : s.change + " " + s.topBtn}>Редактирование</div> */}
                <div onClick={() => setToggle(false)} className={!toggle ? s.view + " " + s.topBtn + " " + s.active : s.view + " " + s.topBtn}>Просмотр</div>
        </div>
        <NavLink to="/auth/admin/" className={s.exit}>🠒</NavLink>
        {toggle ? 
            <div className={s.list}>
                <NavLink to="/auth/admin/request" className={s.link}>Теги о ЗИД</NavLink>
            </div>
            :
            <div className={s.list}>
                <NavLink to="/auth/admin/request" className={s.link}>Заявки</NavLink>
                <NavLink to="/auth/admin/tags" className={s.link}>Теги о ЗИД</NavLink>
            </div>
        }
        </>
    )
}

export default MenuAdmin