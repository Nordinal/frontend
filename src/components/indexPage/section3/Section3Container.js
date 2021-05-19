import Section3 from './Section3'
import {connect} from 'react-redux'
import { initAboutUs } from '../../../redux/reducer/reducerSection3';


const mstp = (state) => {
    return {
        reducer: state.reducerSection3
    };
}

const mdtp = (dispatch) => {
    return {
        initAboutUs: () => {
            dispatch(initAboutUs());
        }
    };
}

const Section3Container = connect(mstp, mdtp)(Section3);


export default Section3Container;