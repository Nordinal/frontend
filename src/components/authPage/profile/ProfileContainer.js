import Profile from './Profile'
import {connect} from 'react-redux'
import {checkAuthPassword, changeTel} from '../../../redux/reducer/reducerAuth'


const mstp = (state) => {
    return {
        auth: state.reducerAuth,
    };
}

const mdtp = (dispatch) => {
    return {
        changePassword: (e) => {
            dispatch(checkAuthPassword(e.target.value))
        },
        changeTel: (e) => {
            dispatch(changeTel(e.target.value));
        }
    };
}

const ProfileContainer = connect(mstp, mdtp)(Profile);


export default ProfileContainer;