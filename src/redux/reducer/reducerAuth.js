import {user} from '../../api/initApi'

const CHECK_AUTH_EMAIL = 'CHECK_AUTH';
const CHECK_AUTH_PASSWORD = "CHECK_AUTH_PASSWORD"
const SUBMIT = "SUBMIT"
const CHANGE_TEL = "CHANGE_TEL"
const SUBMIT_FALSE = "SUBMIT_FALSE"
const UPDATE_REG_EMAIL = "UPDATE_REG_EMAIL"
const UPDATE_REG_PASSWORD = "UPDATE_REG_PASSWORD"
const UPDATE_REG_PASSWORD_AGAIN = "UPDATE_REG_PASSWORD_AGAIN"
const UPDATE_REG_PASSWORD_TEL = "UPDATE_REG_PASSWORD_TEL"
const CHECK_REG_DATA = "CHECK_REG_DATA"
const NEW_MESSAGE_ERROR = "NEW_MESSAGE_ERROR"
const SWITCH_BLOCK = "SWITCH_BLOCK"

let initialStore = {
    email: "",
    tel: "",
    isLoggin: false,

    currentEmail: "",
    currentTel: "",
    currentID: null,

    regPass: "",
    regPassAgain: "",
    regEmail: "",
    regTel: "",

    chEmail: "",
    chPhone: "",
    chPassOld: "",
    chPassNew: "",
    chPassRepeatNew: "",

    message: "",
    errorMessage: "",
    status: 0,
    isBlock: false,
    isFetching: false,
    success: false
}

const reducerSection2 = (state = initialStore, action = {}) => {
    switch(action.type){
        case NEW_MESSAGE_ERROR: {
            return {
                ...state,
                message: action.data
            }
        }
        case CHECK_AUTH_EMAIL: {
            return {
                ...state,
                email: action.email
            };
        };
        case CHECK_AUTH_PASSWORD: {
            return {
                ...state,
                password: action.password
            }
        }
        case SUBMIT: {
            localStorage.setItem("id", action.id)
            return {
                ...state,
                isLoggin: true,
                currentEmail: action.email,
                currentTel: action.tel,
                currentID: action.id,
                chEmail: action.email,
                chPhone: action.tel
            }
        }
        case SUBMIT_FALSE: {
            localStorage.removeItem("id")
            return {
                ...state,
                isLoggin: false,
                currentEmail: "",
                currentPassword: "",
                currentTel: "",
                email: "",
                password: ""
            }
        }
        case CHANGE_TEL: {
            return {
                ...state,
                tel: action.tel
            }
        }
        case UPDATE_REG_EMAIL: {
            return {
                ...state,
                regEmail: action.data
            }
        }
        case UPDATE_REG_PASSWORD: {
            return {
                ...state,
                regPass: action.data
            }
        }
        case UPDATE_REG_PASSWORD_AGAIN: {
            return {
                ...state,
                regPassAgain: action.data
            }
        }
        case UPDATE_REG_PASSWORD_TEL: {
            return {
                ...state,
                regTel: action.data
            }
        }
        case CHECK_REG_DATA: {
            if(state.regPass == state.regPassAgain && state.regPass != "" && state.regEmail != "" && state.regTel != ""){
                if(state.regPass.length < 8){
                    return {
                        ...state,
                        message: "Пароль меньше 8 символов",
                        status: 0
                    }
                }
                return {
                    ...state,
                    status: 1
                }
            }
            else{
                return {
                    ...state,
                    message: "Неверные данные",
                    status: 0
                }
            }
        }
        case SWITCH_BLOCK: {
            return {
                ...state,
                isBlock: action.bool
            }
        }
        case CHANGE_EMAIL_ADMIN: {
            return {
                ...state,
                chEmail: action.data
            }
        }
        case CHANGE_PHONE_ADMIN: {
            return {
                ...state,
                chPhone: action.data
            }
        }
        case CHANGE_PASSWORD_OLD_ADMIN: {
            return {
                ...state,
                chPassOld: action.data
            }
        }
        case CHANGE_PASSWORD_NEW_ADMIN: {
            return {
                ...state,
                chPassNew: action.data
            }
        }
        case CHANGE_PASSWORD_REPEAT_NEW_ADMIN: {
            return {
                ...state,
                chPassRepeatNew: action.data
            }
        }
        case IS_FETCHING_AUTH: {
            return {
                ...state,
                isFetching: action.bool
            }
        }
        case ERROR_MESSAGE_ADMIN: {
            return {
                ...state,
                errorMessage: action.data
            }
        }
        case SUCCESS_CHANGE_DATA: {
            return{
                ...state,
                success: action.bool,
                errorMessage: ""
            }
        }
        default:
            return state;
    }

    
}
const switchBlock = (bool) => ({
    type: SWITCH_BLOCK,
    bool
})
export const sendRegData = () => async (dispatch, getState) => {
    dispatch(switchBlock(true));
    dispatch({type: CHECK_REG_DATA});
    if(getState().reducerAuth.status === 1){
        const res = await user.register({email: getState().reducerAuth.regEmail, pass: getState().reducerAuth.regPass, tel: getState().reducerAuth.regTel});
        if(res.data) {
            dispatch({type: SUBMIT, email: res.data.email, tel: res.data.tel, id: res.data.id});
            dispatch(switchBlock(false));
        }
        else{
            dispatch({type: NEW_MESSAGE_ERROR, data: res.data.message});
            dispatch(switchBlock(false));
        }
    }
    else{
        dispatch(switchBlock(false));
    }
}
export const updateRegEmail = (data) => ({
    type: UPDATE_REG_EMAIL,
    data
})
export const updateRegPassword = (data) => ({
    type: UPDATE_REG_PASSWORD,
    data
})
export const updateRegPasswordAgain = (data) => ({
    type: UPDATE_REG_PASSWORD_AGAIN,
    data
})
export const updateRegTel = (data) => ({
    type: UPDATE_REG_PASSWORD_TEL,
    data
})
export const checkAuthEmail = (email) => ({
    type: CHECK_AUTH_EMAIL,
    email: email,
});
export const checkAuthPassword = (password) => ({
    type: CHECK_AUTH_PASSWORD,
    password: password,
});
export const changeTel = (tel) => ({
    type: CHANGE_TEL,
    tel: tel
})

export const submit = (email, tel, id) => ({
    type: SUBMIT,
    email: email,
    tel: tel,
    id
})
export const submitFalse = () => ({
    type: SUBMIT_FALSE
})

// admin
const CHANGE_EMAIL_ADMIN = "CHANGE_EMAIL_ADMIN";
const CHANGE_PHONE_ADMIN = "CHANGE_PHONE_ADMIN";
const CHANGE_PASSWORD_OLD_ADMIN = "CHANGE_PASSWORD_OLD_ADMIN";
const CHANGE_PASSWORD_NEW_ADMIN = "CHANGE_PASSWORD_NEW_ADMIN";
const CHANGE_PASSWORD_REPEAT_NEW_ADMIN = "CHANGE_PASSWORD_REPEAT_NEW_ADMIN";
const IS_FETCHING_AUTH = "IS_FETCHING_AUTH";
const ERROR_MESSAGE_ADMIN = "ERROR_MESSAGE_ADMIN";
const SUCCESS_CHANGE_DATA = "SUCCESS_CHANGE_DATA";

export const changePhone = (data) => ({
    type: CHANGE_PHONE_ADMIN,
    data
})
export const changePasswordOld = (data) => ({
    type: CHANGE_PASSWORD_OLD_ADMIN,
    data
})
export const changePasswordNew = (data) => ({
    type: CHANGE_PASSWORD_NEW_ADMIN,
    data
})
export const changePasswordRepeatNew = (data) => ({
    type: CHANGE_PASSWORD_REPEAT_NEW_ADMIN,
    data
})
export const isFetching = (bool) => ({
    type: IS_FETCHING_AUTH,
    bool
})
export const errorMessage = (data) => ({
    type: ERROR_MESSAGE_ADMIN,
    data
})
export const successChangeData = (bool) => ({
    type: SUCCESS_CHANGE_DATA,
    bool
})
export const submitChange = () => async (dispatch, getState) => {
    dispatch(isFetching(true));
    const passOld = getState().reducerAuth.chPassOld;
    const passNew = getState().reducerAuth.chPassNew;
    const passNewRepeat = getState().reducerAuth.chPassRepeatNew;
    const tel = getState().reducerAuth.chPhone;
    const id = getState().reducerAuth.currentID
    user.changeUser({tel, passOld, passNew, passNewRepeat, id}).then((result) => {
        if(!result.data.isFine){
            dispatch(errorMessage(result.data.errorMessage));
        }
        else{
            dispatch(successChangeData(true));
        }
        dispatch(isFetching(false));
    })
}
export default reducerSection2;