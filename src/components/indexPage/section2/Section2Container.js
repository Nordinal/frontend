import Section2 from './Section2'
import {connect} from 'react-redux'
import {updateNewTagCreator, changeTagPersonCreator, initTags} from '../../../redux/reducer/reducerSection2'


const mstp = (state) => {
    return {
        reducer: state.reducerSection2
    };
}

const mdtp = (dispatch) => {
    return {
        changeInput: (e) => {
            dispatch(updateNewTagCreator(e.target.value));
        },
        changeTegPerson: () => {
            dispatch(changeTagPersonCreator())
        },
        initTags: () => {
            dispatch(initTags())
        }
    };
}

const Section2Container = connect(mstp, mdtp)(Section2);


export default Section2Container;