import img1 from '../../img/engenner/1.jpeg'
import img2 from '../../img/engenner/2.jpeg'
import img3 from '../../img/engenner/3.jpg'
import img4 from '../../img/engenner/4.jpg'
import img5 from '../../img/engenner/5.jpg'
import img6 from '../../img/engenner/6.jpg'
import img7 from '../../img/engenner/7.jpg'
import img11 from '../../img/engenner/1-min.jpg'
import img22 from '../../img/engenner/2-min.jpg'
import img33 from '../../img/engenner/3-min.jpg'
import img44 from '../../img/engenner/4-min.jpg'
import img55 from '../../img/engenner/5-min.jpg'
import img66 from '../../img/engenner/6-min.jpg'
import img77 from '../../img/engenner/7-min.jpg'


const initialState = {
    content: [
        {
            name: 'Инженер-конструктор',
            img: img7,
            imageModal: img77
        },
        {
            name: 'Инженер-технолог',
            img: img1,
            imageModal: img11
        },
        {
            name: 'Инженер-программист',
            img: img2,
            imageModal: img22
        },
        {
            name: 'Инженер-электроник',
            img: img3,
            imageModal: img33
        },
        {
            name: 'Инженер-механик',
            img: img6,
            imageModal: img66
        },
        {
            name: 'Инженер-металлург',
            img: img4,
            imageModal: img44
        },
        {
            name: 'Инженер-метролог',
            img: img5,
            imageModal: img55
        },
        
    ],
    active: 0,
}

const reducerSection6 = (state = initialState, action = {}) => {
    switch(action.type){
        
        default:
            return state;
    }
}


export default reducerSection6;