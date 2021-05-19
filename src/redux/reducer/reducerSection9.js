const TOGGLE_IS_BEGIN = "TOGGLE_IS_BEGIN"
const UPDATE_RESPONSE = "UPDATE_RESPONSE"
const INIT_RESULT = "INIT_RESULT"

const initialState = {
    content: [
        {
            name: 'Тест по профориентации',
            type: 1,
            questions: '30',
            current: '',
            isBegin: false,
            questionsList: [
                {
                    title: "Я легко знакомлюсь с людьми",
                    response: [0, 0, 0, 0, 2],
                },
                {
                    title: "Я охотно и подолгу могу что-нибудь мастерить",
                    response: [0, 1, 0, 0, 0],
                },
                {
                    title: "Я люблю ходить в музей, театры, на выставки",
                    response: [0, 0, 0, 1, 0],
                },
                {
                    title: "Я охотно и постоянно ухаживаю за растениями, животными",
                    response: [1, 0, 0, 0, 0],
                },
                {
                    title: "Я охотно и подолгу моrу что-нибудь вычислять и чертить",
                    response: [0, 0, 1, 0, 0],
                },
                {
                    title: "Я с удовольствием общаюсь со сверстниками или малышами",
                    response: [0, 0, 0, 0, 1],
                },
            ],
            responseList: [
                {
                    title: "Человек - живая природа",
                    desc: "Представителей этих профессий объединяет одно очень важное качество — любовь к природе. Но любовь не созерцательная, которой обладают практически все люди, считая природу наиболее благоприятной средой для отдыха, а деятельная, связанная с познанием ее законов и применением их. Одно дело любить животных и растения, играть с ними, радоваться им. И совсем другое – регулярно, день за днем ухаживать за ними, наблюдать, лечить, выгуливать, не считаясь с личным временем и планами. Специалист должен не просто все знать о живых организмах, но и прогнозировать возможные изменения в них и принимать меры. От человека требуется инициатива и самостоятельность в решении конкретных задач, заботливость, терпение и дальновидность. Человек, работающий в сфере «человек-природа», должен быть спокойным и уравновешенным. Представители этого типа имеют дело с растительными и животными организмами, микроорганизмами и условиями их существования.  Сюда можно отнести профессии, связанные с изучением живой и неживой природы, с уходом за растениями и животными, с профилактикой и лечением заболеваний растений и животных: микробиолог, геолог, овощевод, орнитолог, зоотехник, ветеринар, эколог, агрохимик, мелиоратор, лесовод контролер-приемщик фруктов, дегустатор чая; др.",
                },
                {
                    title: "Человек - техника",
                    desc: "Особенность технических объектов в том, что они как правило, могут быть точно измерены по многим признакам. При их обработке, преобразовании, перемещении или оценке от работника требуется точность, определенность действий. Техника как предмет труда представляет широкие возможности для новаторства, выдумки, творчества, поэтому важное значение приобретает такое качество, как практическое мышление. Техническая фантазия, способность мысленно соединять и разъединять технические объекты и их части — важные условия для успеха в данной области. Работники имеют дело с неживыми, техническими объектами труда. Тип 'Человек - техника' включает в себя профессии, связанны с созданием, монтажом, сборкой и наладкой технических средств: газоэлектросварщик, токарь, инженер, конструктор, слесарь, монтажник, водитель, механик, машинист, технолог, пирометрист, контролер готовой продукции в машиностроении, мастер-диагност сельскохозяйственной техники и др. ",
                },
                {
                    title: "Человек - знаковая система",
                    desc: "Мы встречаемся со знаками значительно чаще, чем обычно представляем себе. Это цифры, коды, условные знаки, естественные или искусственные языки, чертежи, таблицы, формулы. В любом случае человек воспринимает знак как символ реального объекта или явления. Поэтому специалисту, который работает со знаками, важно уметь с одной стороны абстрагироваться от реальных физических, химических, механических свойств предметов, а с другой – представлять и воспринимать характеристики реальных явлений или объектов, стоящих за знаками. Чтобы успешно работать в какой-нибудь профессии данного типа, необходимо уметь мысленно погружаться в мир, казалось бы сухих обозначений и сосредотачиваться на сведениях, которые они несут в себе. Особые требования к профессии этого типа предъявляют к вниманию. Тип 'Человек - знаковая система' объединяет профессии, связанные с текстами, цифрами, формулами, и таблицами, с чертежами, картами, схемами, звуковыми сигналами: переводчик, программист, бухгалтер, экономист, специалист по маркетингу, геодезист, телефонист, налоговый инспектор, чертежник, композитор и др. ",
                },
                {
                    title: "Человек - художественный образ",
                    desc: "Важнейшие требования, которые предъявляют к профессиям, связанным с изобразительной, музыкальной, литературно-художественной, актерско сценической деятельностью человека – наличие способности к искусствам, творческое воображение, образное мышление, талант, трудолюбие. Явления, факты художественного отображения действительности - вот что занимает представителей этого типа профессий. К типу 'Человек - художественный образ' можно отнести профессии, связанные с созданием, проектированием, моделированием художественных произведений, с изготовлением различных изделий по эскизу, образцу: журналист, художник, модельер, закройщик, ювелир, дизайнер, архитектор, парикмахер, гример-пастижер, декоратор-оформитель, актер и др.",
                },
                {
                    title: "Человек - человек",
                    desc: "Даже выбирая профессию, не связанную непосредственно с общением, вы поступите правильно, если обратите внимание на общительность и контактность. Подумайте, куда вы обращены к себе или к людям? С кем бы вы хотели общаться — с собой или с другими? Главное содержание труда в профессиях типа человек-человек сводится к взаимодействию между людьми. Если не наладиться это взаимодействие, значит не наладится и работа. Качества необходимые для работы с людьми: устойчивое хорошее настроение в процессе работы с людьми, потребность в общении, способность мысленно ставить себя на место другого человека, быстро понимать намерения, помыслы, настроения людей, умение разбираться в человеческих отношениях, хорошая память (умение держать в уме имена и особенности многих людей) умение находить общий язык с различными людьми, терпение. Предметом интереса, распознавания, обслуживания, преобразования здесь являются социальные системы, сообщества, группы населения, люди разного возраста. К профессиям типа 'Человек - человек' относятся профессии, связанные с медицинским обслуживанием и правовой защитой человека: врач, медсестра, фельдшер, преподаватель, психолог, референт, гувернер, менеджер, продавец, официант, агент по рекламе, экспедитор, юрист, следователь, инспектор ГИБДД, и др.",
                },
            ],
            result: [0,0,0,0,0]
        },
        {
            name: 'Тест по истории завода',
            type: 2,
            questions: '15',
            current: '',
            isBegin: false,
            questionsList: [

            ],
            responseList: [

            ]
        },
        {
            name: 'Тест о предприятии',
            type: 2,
            questions: '18',
            current: '',
            isBegin: false,
            questionsList: [

            ],
            responseList: [

            ]
        },
    ],
}

const reducerSection9 = (state = initialState, action = {}) => {

    switch(action.type){
        case TOGGLE_IS_BEGIN: {
            let newContent = [...state.content];
            newContent[action.index].isBegin = !newContent[action.index].isBegin;
            return{
                ...state,
                content: [...newContent]
            }
        }
        case UPDATE_RESPONSE: {
            let response = state.content[action.index].questionsList[action.count].response;
            let newContent = [...state.content];
            if(action.bool){
                let result = state.content[action.index].result.map((item, index) => item + response[index])
                newContent[action.index].result = result
            }
            return{
                ...state,
                content: [...newContent]
            }
        }
        case INIT_RESULT: {
            let result = state.content[action.index].result.map(item => 0);
            let newContent = [...state.content];
            newContent[action.index].result = result;
            newContent.forEach(item => item.isBegin = false);
            return {
                ...state,
                content: [...newContent],
            }
        }
        default:{
            return state;
        }
    }
}

export const toggleIsBegin = (index) => ({
    type: TOGGLE_IS_BEGIN,
    index: index
})

export const updateResponse = (bool, count, index) => ({
    type: UPDATE_RESPONSE,
    bool: bool,
    count: count,
    index : index,
})

export const initResult = (index) => ({
    type: INIT_RESULT,
    index: index,
})
export default reducerSection9