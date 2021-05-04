import Header from './Header'
import {connect} from 'react-redux'
import {init} from '../../../../redux/reducer/reducerAuth'


const mstp = (state) => {
    return {
        auth: state.reducerAuth
    };
}

const mdtp = (dispatch) => {
    return {

    };
}

const HeaderContainer = connect(mstp, mdtp)(Header);


export default HeaderContainer;