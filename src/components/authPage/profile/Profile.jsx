import s from './Profile.module.css'
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';

const Profile = (props) => {
    const [successModal, setSuccessModal] = useState(false);
    useEffect(() => {
        if(props.auth.success){
            setSuccessModal(true);
            props.successChangeData(false);
        }
    }, [props.auth.success])
    return(
        <div className={s.container}>
            <div>
                <p className={s.error}>{props.auth.errorMessage}</p>
                <p className={s.email}><input disabled={true} className={s.input} value={props.auth.chEmail}/></p>
                <p className={s.tel}><InputMask mask="+7(\999) 999 99 99" className={s.input} value={props.auth.chPhone} onChange={(e) => props.changePhone(e.target.value)}/></p>
                <p className={s.num}><input type="password" className={s.input} value={props.auth.chPassOld}  onChange={(e) => props.changePasswordOld(e.target.value)}/></p>
                <p className={s.numNew}><input type="password" className={s.input} value={props.auth.chPassNew} onChange={(e) => props.changePasswordNew(e.target.value)}/></p>
                <p className={s.numNew2}><input type="password" className={s.input} value={props.auth.chPassRepeatNew} onChange={(e) => props.changePasswordRepeatNew(e.target.value)}/></p>
            </div>
            <button className={s.btn} onClick={() => {
                props.submitChange();
            } } disabled={props.auth.isFetching}>Сохранить</button>
            {successModal ? 
            <div className={s.modalBack} onClick={(e) => {
                e.stopPropagation();
                setSuccessModal(false);
            }}>
                <div className={s.modalContent}>
                    <p>Данные изменены</p>
                    <button onClick={() => setSuccessModal(false)}>ок</button>
                </div>
            </div>
            : undefined
            }
        </div>
    )
}


export default Profile;