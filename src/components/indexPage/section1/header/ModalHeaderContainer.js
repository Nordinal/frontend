import ModalHeader from './ModalHeader'
import {connect} from 'react-redux'
import {checkAuthEmail, checkAuthPassword, submit, submitFalse} from '../../../../redux/reducer/reducerAuth'


const mstp = (state) => {
    return {
        reducer: state.reducerAuth
    };
}

const mdtp = (dispatch) => {
    return {
        changeValueEmail: (e) =>{
            dispatch(checkAuthEmail(e.target.value))
        },
        changeValuePassword: (e) => {
            dispatch(checkAuthPassword(e.target.value))
        },
        submit: (email, password, tel) => {
            dispatch(submit(email, password, tel))
        },
        submitFalse: () => {
            dispatch(submitFalse())
        }
    };
}

const ModalHeaderContainer = connect(mstp, mdtp)(ModalHeader);


export default ModalHeaderContainer;