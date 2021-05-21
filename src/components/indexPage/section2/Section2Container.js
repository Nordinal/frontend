import Section2 from './Section2'
import {connect} from 'react-redux'
import {updateNewTagCreator, changeTagPersonCreator, initTags, updateLikeTag, updateUnLikeTag, initTagNotFetch, setActiveTag} from '../../../redux/reducer/reducerSection2'


const mstp = (state) => {
    return {
        reducer: state.reducerSection2
    };
}

const mdtp = (dispatch) => {
    return {
        changeInput: (e) => {
            dispatch(updateNewTagCreator(e.target.value));
        },
        changeTegPerson: () => {
            dispatch(changeTagPersonCreator())
        },
        initTags: () => {
            dispatch(initTags())
        },
        updateLikeTag: (id) => {
            dispatch(updateLikeTag(id))
        },
        updateUnLikeTag: (id) => {
            dispatch(updateUnLikeTag(id))
        },
        initTagNotFetch: () => {
            dispatch(initTagNotFetch())
        },
        setActiveTag: (id, bool) => {
            dispatch(setActiveTag(id, bool))
        }
    };
}

const Section2Container = connect(mstp, mdtp)(Section2);


export default Section2Container;