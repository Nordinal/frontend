import { connect } from 'react-redux'
import Section7 from './Section7'


const mstp = (state) => {
    return {
        reducer: state.reducerSection7
    }
}

const mdtp = () => {
    return {

    }
}

const Section7Container = connect(mstp, mdtp)(Section7);

export default Section7Container;