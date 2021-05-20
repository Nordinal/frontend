import {message} from "../../api/initApi"

let initialStore = {
    name: '',
    tel: '',
    message: '',
    isFetching: false,
    isOpenModal: false,
    messageModal: '',
}

const reducerSection2 = (state = initialStore, action = {}) => {
    switch(action.type){
        case UPDATE_NAME: {
            if(action.name.length >= 30){
                return{
                    ...state
                }
            }
            return {
                ...state,
                name: action.name
            }
        };
        case UPDATE_TEL: {
            return {
                ...state,
                tel: action.tel
            }
        };
        case UPDATE_MESSAGE: {
            if(action.message.length >= 350){
                return{
                    ...state
                }
            }
            else{
                return {
                    ...state,
                    message: action.message
                }
            }
        };
        case IS_FETCHING_TRUE: {
            return {
                ...state,
                isFetching: true
            }
        }
        case DELETE_STATE: {
            return{
                name: '',
                tel: '',
                message: '',
                isFetching: false,
                isOpenModal: true,
                messageModal: action.messageModal
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isOpenModal: false
            }
        }
        default:
            return state;
    }

}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_TEL = "UPDATE_TEL";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const IS_FETCHING_TRUE = "IS_FETCHING_TRUE";
const DELETE_STATE = "DELETE_STATE";
const CLOSE_MODAL = "CLOSE_MODAL";

export const updateName = (name) => ({
    type: UPDATE_NAME,
    name
})
export const updateTel = (tel) => ({
    type: UPDATE_TEL,
    tel
})
export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    message
})
const isFetchingTrue = () => ({
    type: IS_FETCHING_TRUE
})
const deleteState = (messageModal) => ({
    type: DELETE_STATE,
    messageModal
})
export const closeModal = () => ({
    type: CLOSE_MODAL
})
export const addMessage = () => (dispatch, getState) =>{
    if(getState().reducerSection10.name != "" && getState().reducerSection10.message != ""){
        dispatch(isFetchingTrue());
        message.addMessage(getState().reducerSection10).then((res) =>{
            if(res.data != false){
                dispatch(deleteState("Сообщение отправлено"));
            }
            else{
                dispatch(deleteState("Возникла какая-то ошибка"));
            }
        })
    }
}

export default reducerSection2;