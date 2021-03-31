const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT';
const CHANGE_TEG_PERSON = 'CHANGE_TEG_PERSON'

let initialStore = {
    tag: [
        'ЗИД',
        'Целевое обучение',
        'Инженеры',
        'Карьера',
        'Перспективаня работа'
    ],
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
            return{
                ...state,
                tagPerson: [...state.tagPerson, state.newTag],
                newTag: ''
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

export default reducerSection2;