import ModalHeader from './ModalHeader'
import {connect} from 'react-redux'
import {checkAuthEmail, checkAuthPassword, submit, submitFalse, sendRegData, updateRegEmail, updateRegPassword, updateRegPasswordAgain, updateRegTel} from '../../../../redux/reducer/reducerAuth'


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
        submit: (email, tel, id) => {
            dispatch(submit(email, tel, id))
        },
        submitFalse: () => {
            dispatch(submitFalse())
        },
        sendRegData: () => {
            dispatch(sendRegData())
        },
        updateRegEmail: (e) => {
            dispatch(updateRegEmail(e.target.value))
        },
        updateRegPassword: (e) => {
            dispatch(updateRegPassword(e.target.value))
        },
        updateRegPasswordAgain: (e) => {
            dispatch(updateRegPasswordAgain(e.target.value))
        },
        updateRegTel: (e) => {
            dispatch(updateRegTel(e.target.value))
        },
    };
}

const ModalHeaderContainer = connect(mstp, mdtp)(ModalHeader);


export default ModalHeaderContainer;