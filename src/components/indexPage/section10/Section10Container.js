import { connect } from 'react-redux'
import { updateName, updateMessage, updateTel, addMessage, closeModal } from '../../../redux/reducer/reducerSection10'
import Section10 from './Section10'


const mstp = (state) => {
    return {
        disable: state.reducerSection5.disableSection10,
        reducer: state.reducerSection10
    }
}

const Section10Container = connect(mstp, {updateName, updateTel, updateMessage, addMessage, closeModal})(Section10);

export default Section10Container;