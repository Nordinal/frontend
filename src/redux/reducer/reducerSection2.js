const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT';

let initialStore = {
    tag: [
        'ЗИД',
        'Целевое обучение',
        'Инженеры',
        'Карьера',
        'Перспективаня работа'
    ]
}

const reducerSection2 = (state = initialStore, action = {}) => {
    switch(action.type){
        case UPDATE_NAME_TEXT: {
            
            return {};
        }
        default:
            return state;
    }

    
}

export const updateNewTagCreator = (text) => ({
    type: UPDATE_NAME_TEXT,
    text: text,
})

export default reducerSection2;