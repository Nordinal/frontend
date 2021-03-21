

const initialState = {
    content: [
        {
            name: 'Тест по профориентации',
            questions: '23',
            current: ''
        },
        {
            name: 'Тест по истории завода',
            questions: '15',
            current: ''
        },
        {
            name: 'Тест о предприятии',
            questions: '18',
            current: ''
        },
    ]
}

const reducerSection9 = (state = initialState, action = {}) => {

    switch(action.type){
        default:{
            return state;
        }
    }
}

export default reducerSection9