import {createStore, combineReducers} from 'redux'
import reducerSection2 from './reducer/reducerSection2'
import reducerSection3 from './reducer/reducerSection3'
import reducerSection5 from './reducer/reducerSection5';
import reducerSection6 from './reducer/reducerSection6';
import reducerSection7 from './reducer/reducerSection7';

let reducers = combineReducers({
    reducerSection2: reducerSection2,
    reducerSection3: reducerSection3,
    reducerSection5: reducerSection5,
    reducerSection6: reducerSection6,
    reducerSection7: reducerSection7,
});

let store = createStore(reducers);

export default store;