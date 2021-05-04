import store from '../../redux/reduxStore'

const init = () => {
    store.dispatch({type: 'INIT'})
}

export default init;