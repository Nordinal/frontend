import { connect } from 'react-redux'
import { initResult, toggleIsBegin, updateResponse, exitTest, updateResult} from '../../../redux/reducer/reducerSection9'
import Tests from './Tests'


const mstp = (state) => {
    return{
        tests: state.reducerSection9
    }
}

const TestsContainer = connect(mstp,{initResult, updateResponse, toggleIsBegin, exitTest, updateResult})(Tests);
export default TestsContainer;