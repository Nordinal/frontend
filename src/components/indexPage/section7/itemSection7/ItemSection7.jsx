import s from './ItemSection7.module.css'


const ItemSection7 = ({name, img, active, setActive, index, clearTimer}) => {
    const handleClick = () => {
        if(active){
            // let elem = document.querySelectorAll("." + s.change);
            // elem[index].classList.toggle(s.swipe);
        }
        else{
            let elem = document.querySelectorAll("." + s.change);
            for(let i = 0; i < elem.length;i++){
                elem[i].classList.remove(s.swipe);
            }
            setActive(index);
        }
        clearTimer();
    }
    return (
        <div className={active ? s.container + " " + s.active : s.container} onClick={handleClick}>
            <img src={img} className={s.img}/>
            <div className={active ? s.contentActive : s.content}>
                <div className={active ? s.title + " " + s.titleActive : s.title}>{name}</div>
                {/* <button className={active ? s.btn : s.disable}>Подробнее</button> */}
            </div>
            {/* <div className={s.change}>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}
        </div>
    )
}

export default ItemSection7;