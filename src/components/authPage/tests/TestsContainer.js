import { connect } from 'react-redux'
import Tests from './Tests'


const mstp = (state) => {
    return{
        tests: state.reducerSection9
    }
}

const mdtp = (dispatch) => {
    return{

    }
}

const TestsContainer = connect(mstp,mdtp)(Tests);
export default TestsContainer;