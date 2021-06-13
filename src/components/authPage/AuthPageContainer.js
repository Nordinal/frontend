import AuthPage from './AuthPage'
import {connect} from 'react-redux'
import {submitFalse} from '../../redux/reducer/reducerAuth'


const mstp = (state) => {
    return {
        auth: state.reducerAuth
    };
}

const mdtp = (dispatch) => {
    return {
        submitFalse: () => {
            dispatch(submitFalse());
        },
    };
}

const AuthPageContainer = connect(mstp, mdtp)(AuthPage);


export default AuthPageContainer;