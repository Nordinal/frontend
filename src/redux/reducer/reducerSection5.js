

const initialState = {
    institute: [
        {
            textBtn: 'БГТУ',
            img: 'https://sun9-54.userapi.com/impg/rcC1VxJjWGQsYIk0KxrvHAB1U1ZfiA2e76dNLA/UUDVtaJ1XVc.jpg?size=372x372&quality=96&sign=b0db819c9c62247d11e617ab7844330f&type=album',
            direction: [
                {
                    number: '09.03.04',
                    textBtn: 'Программная инженерия',
                    modal: {
                        textModal: 'Это текст модального окна',
                        imgsModal: [
                            'https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                            'https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                            'https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                            'https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '17.05.02',
                    textBtn: 'Стрелково-пушечное,артиллерийское и ракетное оружие',
                    modal: {
                        textModal: 'Это текст модального окна1',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '11.05.01',
                    textBtn: 'Радиоэлектронные системы и комплексы',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
            ]
        },
        {
            textBtn: 'МГТУ',
            img: 'https://sun9-9.userapi.com/impg/Wxd7Isn3DMF53PoZXIEfX-vLDXwiJjvaGZntyQ/Yf6kk9JajxA.jpg?size=316x372&quality=96&sign=ffa35239ae517811cafda4e2d7da58e6&type=album',
            direction: [
                {
                    number: '',
                    textBtn: 'Первое1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '',
                    textBtn: 'Второе1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '',
                    textBtn: 'Третье1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
            ]
        },
        {
            textBtn: 'КГТА',
            img: 'https://sun9-54.userapi.com/impg/UPWyUn2qN9tt0MTGZ7z-bauf_VXKHH7w0ogOpQ/YmM8U3P0UWw.jpg?size=136x186&quality=96&sign=598bc4a5b8d7457f7c9f6f5af479c96c&type=album',
            direction: [
                {
                    number: '',
                    textBtn: 'Первое1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '',
                    textBtn: 'Второе1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '',
                    textBtn: 'Третье1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
            ]
        },
        {
            textBtn: 'ИГЭУ',
            img: 'https://sun9-32.userapi.com/impg/VaKZBD6EXbhBHEmDWH6tohKG-D_UqO9cc6-svA/_GScG8TkxAY.jpg?size=186x186&quality=96&sign=96e0444c2e4a507582f0026ac0ca3c1f&type=album',
            direction: [
                {
                    number: '',
                    textBtn: 'Первое1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '',
                    textBtn: 'Второе1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
                {
                    number: '',
                    textBtn: 'Третье1',
                    modal: {
                        textModal: 'Это текст модального окна2',
                        imgsModal: ['https://sun9-50.userapi.com/impg/IUSgfVJYkayVExap_kleZF0UKmcWRbQ9hiqGWw/2EeBxgpB6s4.jpg?size=1140x694&quality=96&sign=4c3453dff6294dfdc956ab772433969a&type=album',
                        ],
                    }
                },
            ]
        },
    ],
    active: 0,
}

const reducerSection5 = (state = initialState, action = {}) => {
    switch(action.type){
        case UPDATE_ACTIVE: {
            return {
                ...state,
                active: action.index,
            };
        }
        default:
            return state;
    }
}

const UPDATE_ACTIVE = 'UPDATE_ACTIVE'

export const updateActiveCreator = (index) => ({
    type: UPDATE_ACTIVE,
    index: index,
});

export default reducerSection5;