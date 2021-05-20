import {message} from '../../api/initApi'

const initialState = {
    content: [],
}

const reducerRequest = (state = initialState, action = {}) => {
    switch(action.type){
        case UPDATE_REQUEST: {
            return{
                ...state,
                content: [...action.content],
            }
        }
        default:
            return state;
    }
}

const UPDATE_REQUEST = "UPDATE_REQUEST"

const updateRequest = (content) => ({
    type: UPDATE_REQUEST,
    content
})

export const initRequest = () => async (dispatch) => {
    const content = await message.initRequest();
    dispatch(updateRequest(content));
}
export const updateStatusRequest = (id) => async (dispatch) => {
    const update = await message.updateStatusRequest(id);
    if(update == true){
        dispatch(initRequest())
    }
}
export const deleteRequest = (id) => async (dispatch) => {
    await message.deleteRequest(id);
}
export default reducerRequest;