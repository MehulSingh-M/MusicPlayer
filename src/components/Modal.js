import React from 'react'
import './Modal.css';
import ClearIcon from '@material-ui/icons/Clear';

const Modal = ({ children, show, close}) => {
    if (!show) return null

    return (
        <div className="Modal">
            <div className="modal-content">
                <ClearIcon className="cross__icon" onClick={close}/>
                {children}
            </div>    
        </div>
    )
}

export default Modal
