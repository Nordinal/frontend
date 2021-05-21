import {init} from "../../api/initApi"

const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT';
const CHANGE_TEG_PERSON = 'CHANGE_TEG_PERSON';
const INIT = "INIT";
const IS_FETCHING_TAG = "IS_FETCHING_TAG";
const SET_ACTIVE_TAG = "SET_ACTIVE_TAG";

let initialStore = {
    tag: [],
    tagPerson: [],
    newTag: '',
    isFetching: false
}

const reducerSection2 = (state = initialStore, action = {}) => {
    switch(action.type){
        case UPDATE_NAME_TEXT: {
            if(action.text.length <= 50){
                return {
                    ...state,
                    newTag: action.text,
                };
            }else{
                return {
                    ...state,
                    newTag: state.newTag
                }
            }
        };
        case CHANGE_TEG_PERSON: {
            if(state.newTag && state.tagPerson.length <= 5){
                localStorage.setItem("tagPerson", JSON.stringify([...state.tagPerson, {tag: state.newTag}]))
                return{
                    ...state,
                    tagPerson: [...state.tagPerson, {tag: state.newTag}],
                    newTag: ''
                }
            }else{
                return{
                    ...state,
                    tagPerson: [...state.tagPerson],
                    newTag: ''
                }
            }
        }
        case INIT: {
            const bool = (id) => {
                if(localStorage.getItem(id) === null){
                    return ""
                }
                else{
                    return localStorage.getItem(id);
                }
            }
            if(action.tag === undefined){
                var tags = state.tag.map((item) => ({_id: item._id, tag: item.tag, like: item.like, status: bool(item._id)}))
            }
            else{
                var tags = action.tag.map((item) => ({_id: item._id, tag: item.tag, like: item.like, status: bool(item._id)}))
            }
            const tagPerson = JSON.parse(localStorage.getItem("tagPerson"));
            return{
                ...state,
                tag: [...tags],
                tagPerson: tagPerson ? tagPerson : []
            }
        }
        case IS_FETCHING_TAG:{
            return{
                ...state,
                isFetching: !state.isFetching
            }
        }
        case SET_ACTIVE_TAG: {
            let id = action.id
            if(localStorage.getItem(`${id}`) == 1){
                localStorage.removeItem(`${id}`)
            }
            else{
                localStorage.setItem(`${id}`, "1");
            }
        }
        default:
            return state;
    }

    
}
export const setActiveTag = (id) => ({
    type: SET_ACTIVE_TAG,
    id,
})
export const initTagNotFetch = () => ({
    type: INIT,
})
export const updateNewTagCreator = (text) => ({
    type: UPDATE_NAME_TEXT,
    text: text,
});

export const changeTagPersonCreator = () => ({
    type: CHANGE_TEG_PERSON
})

export const initTags = () => async (dispatch) => {
    let res = await init.getTags();
    dispatch({type: INIT, tag: res})
}
const isFetching = () => ({
    type: IS_FETCHING_TAG
})
export const updateLikeTag = (id) => async (dispatch) => {
    dispatch(isFetching());
    const result = await init.updateLikeTag(id);
    if(result){
        dispatch(isFetching())
    }
}
export const updateUnLikeTag = (id) => async (dispatch) => {
    dispatch(isFetching());
    const result = await init.updateUnLikeTag(id);
    if(result){
        dispatch(isFetching())
    }
}

export default reducerSection2;