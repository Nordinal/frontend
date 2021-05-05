import { connect } from 'react-redux'
import Section9 from './Section9'
import { toggleIsBegin } from '../../../redux/reducer/reducerSection9'


const mstp = (state) => {
    return {
        reducer: state.reducerSection9,
        auth: state.reducerAuth
    }
}

const mdtp = (dispatch) => {
    return {
        toggleIsBegin: (index) => {
            dispatch(toggleIsBegin(index))
        }
    }
}

const Section9Container = connect(mstp, mdtp)(Section9);

export default Section9Container;