

const initialState = {
    content: [
        {
            name: 'ЗИД',
            desc: 'Это одно из крупнейших предприятий в оборонном и машиностроительном комплексе России с более чем 100-летней историей.',
            image: 'https://i.ibb.co/jhRhPnZ/eb-Q6-BJU5-Fdc.jpg',
            descImage: 'Центральные проходные',
            nameUrl: 'zid.ru',
            url: "https://www.zid.ru/",
        },
        {
            name: 'Целевое обучение',
            desc: 'Это программа в вузах и колледжах, при которой студент обучается за счет работодателя.',
            image: 'https://i.ibb.co/kD3SMpN/section2image2.jpg',
            descImage: 'Студент КГТА',
            nameUrl: 'Модульное окно',
            url: "",
        },
        {
            name: 'Учебный центр',
            desc: 'Это обеспечение соответствия уровня подготовки работников завода.',
            image: 'https://i.ibb.co/4RPpM7n/2-Ee-Bxgp-B6s4.jpg',
            descImage: 'Рабочий',
            nameUrl: 'zid.ru',
            url: "https://www.zid.ru/o-zavode/sotsialnaya-politika/uchebnyy-tsentr/",
        },
    ]
}

const reducerSection3 = (state = initialState, action = {}) => {
    switch(action.type){
        
        default:
            return state;
    }
}


export default reducerSection3;