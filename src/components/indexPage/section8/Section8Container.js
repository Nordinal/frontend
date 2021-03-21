import { connect } from 'react-redux'
import Section8 from './Section8'


const mstp = (state) => {
    return {
        reducer: state.reducerSection8
    }
}

const mdtp = () => {
    return {

    }
}

const Section8Container = connect(mstp, mdtp)(Section8);

export default Section8Container;