import {init} from "../../api/initApi"

const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT';
const CHANGE_TEG_PERSON = 'CHANGE_TEG_PERSON';
const INIT = "INIT"

let initialStore = {
    tag: [],
    tagPerson: [],
    newTag: ''
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
            if(state.newTag){
                return{
                    ...state,
                    tagPerson: [...state.tagPerson, state.newTag],
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
            return{
                ...state,
                tag: action.tag
            }
        }
        default:
            return state;
    }

    
}

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

export default reducerSection2;