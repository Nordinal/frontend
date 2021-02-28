import Section3 from './Section3'
import {connect} from 'react-redux'


const mstp = (state) => {
    return {
        reducer: state.reducerSection3
    };
}

const mdtp = (state) => {
    return {

    };
}

const Section3Container = connect(mstp, mdtp)(Section3);


export default Section3Container;