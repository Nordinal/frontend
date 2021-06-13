import Tags from './Tags'
import {connect} from 'react-redux'
import {} from '../../../../redux/reducer/reducerRequest'
import {initTags} from '../../../../redux/reducer/reducerSection2'

const mstp = (state) => {
    return {
        reducer: state.reducerSection2
    };
}


const RequestContainer = connect(mstp, {initTags})(Tags);


export default RequestContainer;