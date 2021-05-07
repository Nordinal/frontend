import Modal from './Modal';
import modal from './ModalAnimation.module.css'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'


const ModalCreatePortal = (props) => {

    return (
        ReactDOM.createPortal(<CSSTransition 
            in={props.active}
            classNames={{
                enter: modal.modalEnter,
                enterActive: modal.modalEnterActive,
                exit: modal.modalExit,
                exitActive: modal.modalExitActive,
            }}
            timeout={500}
            unmountOnExit
        >
            <Modal  className={modal.modal} active={props.active} setActive={() => {
            props.setActive();
            document.body.style.overflow = "visible";
        }}>{props.inner}</Modal></CSSTransition>, document.getElementById('root'))
    )
}

export default ModalCreatePortal;