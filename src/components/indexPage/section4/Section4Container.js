import Section4 from './Section4'
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

const Section4Container = connect(mstp, mdtp)(Section4);


export default Section4Container;