import Profile from './Profile'
import {connect} from 'react-redux'
import {changePhone, changePasswordOld, changePasswordNew, changePasswordRepeatNew, submitChange, successChangeData} from '../../../redux/reducer/reducerAuth'


const mstp = (state) => {
    return {
        auth: state.reducerAuth,
    };
}


const ProfileContainer = connect(mstp, { changePhone, changePasswordOld, changePasswordNew, changePasswordRepeatNew, submitChange, successChangeData})(Profile);


export default ProfileContainer;