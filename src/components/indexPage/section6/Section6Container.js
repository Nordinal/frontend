import Section6 from './Section6'
import {connect} from 'react-redux'


const mstp = (state) => {
    return {
        reducer: state.reducerSection6
    };
}

const mdtp = (dispatch) => {
    return {
    };
}

const Section6Container = connect(mstp, mdtp)(Section6);


export default Section6Container;