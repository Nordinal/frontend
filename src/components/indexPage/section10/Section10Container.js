import { connect } from 'react-redux'
import Section10 from './Section10'


const mstp = (state) => {
    return {
        disable: state.reducerSection5.disableSection10
    }
}

const mdtp = () => {
    return {

    }
}

const Section10Container = connect(mstp, mdtp)(Section10);

export default Section10Container;