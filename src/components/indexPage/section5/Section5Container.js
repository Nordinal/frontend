import Section5 from './Section5'
import {connect} from 'react-redux'
import {disableSection10, updateActive, updateTurn} from '../../../redux/reducer/reducerSection5'
import { updateName, updateMessage, updateTel, addMessage, closeModal } from '../../../redux/reducer/reducerSection10'


const mstp = (state) => {
    return {
        reducer: state.reducerSection5,
        reducer1: state.reducerSection10
    };
}

const Section5Container = connect(mstp, {
    updateActive, updateTurn, disableSection10, updateName, updateTel, updateMessage, addMessage, closeModal
})(Section5);


export default Section5Container;