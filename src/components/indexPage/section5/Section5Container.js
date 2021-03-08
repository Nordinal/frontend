import Section5 from './Section5'
import {connect} from 'react-redux'
import {updateActiveCreator} from '../../../redux/reducer/reducerSection5'


const mstp = (state) => {
    return {
        reducer: state.reducerSection5
    };
}

const mdtp = (dispatch) => {
    return {
        updateActive: (index) => {
            dispatch(updateActiveCreator(index))
        }
    };
}

const Section5Container = connect(mstp, mdtp)(Section5);


export default Section5Container;