import s from './Profile.module.css'
import InputMask from 'react-input-mask';

const Profile = (props) => {

    return(
        <div className={s.container}>
            <div>
                <p className={s.tel}><InputMask mask="+7(\999) 999 99 99" className={s.input} value={props.auth.tel} onChange={props.changeTel}/></p>
                <p className={s.num}><input className={s.input} value={props.auth.password} onChange={props.changePassword}/></p>
            </div>
            <button className={s.btn}>Сохранить</button>
        </div>
    )
}


export default Profile;