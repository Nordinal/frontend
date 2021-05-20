import Request from './Request'
import {connect} from 'react-redux'
import {initRequest, updateStatusRequest, deleteRequest} from '../../../../redux/reducer/reducerRequest'


const mstp = (state) => {
    return {
        reducer: state.reducerRequest
    };
}


const RequestContainer = connect(mstp, {initRequest, updateStatusRequest, deleteRequest})(Request);


export default RequestContainer;