import store from '../../redux/reduxStore'
import {user} from '../../api/initApi'
import {submit} from '../../redux/reducer/reducerAuth'

const init = async () => {
    if(localStorage.getItem("id")){
        const res = await user.usercookie(localStorage.getItem("id"));
        store.dispatch(submit(res.data.email, res.data.tel, res.data.id))
    }
}

export default init;