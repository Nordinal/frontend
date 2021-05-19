import Admin from './Admin'
import {connect} from 'react-redux'


const mstp = (state) => {
    return {
        auth: state.reducerAuth,
    };
}

const mdtp = (dispatch) => {
    return {
        
    };
}

const AdminContainer = connect(mstp, mdtp)(Admin);


export default AdminContainer;