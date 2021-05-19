import { useState } from 'react';
import s from './Admin.module.css'


const Admin = () => {
    const [toggle, setToggle] = useState(true);
    return(
        <div className={s.container}>
            <div className={s.top}>
                <div onClick={() => setToggle(true)} className={toggle ? s.change + " " + s.topBtn + " " + s.active : s.change + " " + s.topBtn}>Редактирование</div>
                <div onClick={() => setToggle(false)} className={!toggle ? s.view + " " + s.topBtn + " " + s.active : s.view + " " + s.topBtn}>Просмотр</div>
            </div>
            <div>
                <div className={s.exit}>🠒</div>
                {toggle ? 
                <div className={s.list}>
                    <button>Теги о ЗИД</button>
                    <button>О нас</button>
                    <button>Мы предлагаем</button>
                    <button>Институты и направления</button>
                </div>
                :
                <div className={s.list}>
                    <button>Теги о ЗИД</button>
                    <button>Заявки</button>
                    <button>Чаты</button>
                    <button>Статистика</button>
                </div>
                }
            </div>
        </div>
    )
}

export default Admin;