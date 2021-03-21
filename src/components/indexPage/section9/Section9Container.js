import { connect } from 'react-redux'
import Section9 from './Section9'


const mstp = (state) => {
    return {
        reducer: state.reducerSection9
    }
}

const mdtp = () => {
    return {

    }
}

const Section9Container = connect(mstp, mdtp)(Section9);

export default Section9Container;