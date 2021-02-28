import Section2 from './Section2'
import {connect} from 'react-redux'


const mstp = (state) => {
    return {
        reducer: state.reducerSection2
    };
}

const mdtp = (state) => {
    return {

    };
}

const Section2Container = connect(mstp, mdtp)(Section2);


export default Section2Container;