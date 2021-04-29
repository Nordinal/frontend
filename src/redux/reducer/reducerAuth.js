const CHECK_AUTH_EMAIL = 'CHECK_AUTH';
const CHECK_AUTH_PASSWORD = "CHECK_AUTH_PASSWORD"
const SUBMIT = "SUBMIT"
const SUBMIT_FALSE = "SUBMIT_FALSE"

let initialStore = {
    email: "",
    password: "",
    isLoggin: false,
    currentEmail: ""
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
                currentEmail: state.email
            }
        }
        case SUBMIT_FALSE: {
            return {
                ...state,
                isLoggin: false,
                currentEmail: ""
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

export const submit = () => ({
    type: SUBMIT
})
export const submitFalse = () => ({
    type: SUBMIT_FALSE
})

export default reducerSection2;