import { connect } from 'react-redux'
import { changeCurrentTest, initResult, toggleIsBegin, updateResponse } from '../../../redux/reducer/reducerSection9'
import Tests from './Tests'


const mstp = (state) => {
    return{
        tests: state.reducerSection9
    }
}

const mdtp = (dispatch) => {
    return{
        toggleIsBegin: (index) => {
            dispatch(toggleIsBegin(index));
        },
        updateResponse: (bool, count, index) => {
            dispatch(updateResponse(bool, count, index));
        },
        initResult: (index) => {
            dispatch(initResult(index))
        }
    }
}

const TestsContainer = connect(mstp,mdtp)(Tests);
export default TestsContainer;