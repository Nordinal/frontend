import { init } from "../../api/initApi";

const initialState = {
    content: [
        // {
        //     name: 'ЗИД',
        //     desc: 'Это одно из крупнейших предприятий в оборонном и машиностроительном комплексе России с более чем 100-летней историей.',
        //     image: 'https://i.ibb.co/jhRhPnZ/eb-Q6-BJU5-Fdc.jpg',
        //     descImage: 'Центральные проходные',
        //     nameUrl: 'zid.ru',
        //     url: "https://www.zid.ru/",
        // },
        // {
        //     name: 'Учебный центр',
        //     desc: 'Это обеспечение соответствия уровня подготовки работников завода.',
        //     image: 'https://i.ibb.co/4RPpM7n/2-Ee-Bxgp-B6s4.jpg',
        //     descImage: 'Рабочий',
        //     nameUrl: 'zid.ru',
        //     url: "https://www.zid.ru/o-zavode/sotsialnaya-politika/uchebnyy-tsentr/",
        // },
        // {
        //     name: 'Услуги',
        //     desc: 'Завод Дегтярева оказывает полный комплекс услуг, связанных с проектированием, разработкой и сопровождением практически любого технологического процесса.',
        //     image: 'http://www.zid.ru/upload/medialibrary/4df/frezerovka_metallicheskoj_detali.jpg',
        //     descImage: 'Рабочий',
        //     nameUrl: 'zid.ru',
        //     url: "https://www.zid.ru/uslugi/",
        // },
        // {
        //     name: 'Продукция',
        //     desc: 'Завод Дегтярева занимается производством как продукцией оборонного назначения, так и продукцией для гражданского пользования.',
        //     image: 'https://i.ibb.co/7R6BFXB/q5tw4l1231231239-Wcws.jpg',
        //     descImage: 'Корд 12,7 мм пулемет на станке с сошками 6Т19',
        //     nameUrl: 'zid.ru',
        //     url: "https://www.zid.ru/produktsiya/",
        // },
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