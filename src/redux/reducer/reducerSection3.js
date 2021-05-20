import { init } from "../../api/initApi";

const initialState = {
    content: [
    ]
}
const INIT_ABOUT = "INIT_ABOUT"
const reducerSection3 = (state = initialState, action = {}) => {
    switch(action.type){
        case INIT_ABOUT: {
            return{
                ...state,
                content: action.content
            }
        }
        default:
            return state;
    }
}

export const initAboutUs = () => async (dispatch) => {
    let res = await init.getAboutUs();
    dispatch({type: INIT_ABOUT, content: res})
}

export default reducerSection3;