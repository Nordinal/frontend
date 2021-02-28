import {createStore, combineReducers} from 'redux'
import reducerSection2 from './reducer/reducerSection2'
import reducerSection3 from './reducer/reducerSection3'

let reducers = combineReducers({
    reducerSection2: reducerSection2,
    reducerSection3: reducerSection3,
});

let store = createStore(reducers);

export default store;