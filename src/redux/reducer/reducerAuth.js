const CHECK_AUTH_EMAIL = 'CHECK_AUTH';
const CHECK_AUTH_PASSWORD = "CHECK_AUTH_PASSWORD"
const SUBMIT = "SUBMIT"
const CHANGE_TEL = "CHANGE_TEL"
const SUBMIT_FALSE = "SUBMIT_FALSE"

let initialStore = {
    email: "",
    tel: "",
    isLoggin: false,
    currentEmail: "",
    currentTel: "",
}

const reducerSection2 = (state = initialStore, action = {}) => {
    switch(action.type){
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
            return {
                ...state,
                isLoggin: true,
                currentEmail: action.email,
                currentPassword: action.password,
                currentTel: action.tel,
                tel: action.tel,
            }
        }
        case SUBMIT_FALSE: {
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
        default:
            return state;
    }

    
}

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

export const submit = (email, password, tel) => ({
    type: SUBMIT,
    email: email,
    password: password,
    tel: tel
})
export const submitFalse = () => ({
    type: SUBMIT_FALSE
})

export default reducerSection2;