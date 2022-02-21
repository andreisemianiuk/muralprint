import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import style from './Modal.module.css'
import CloseIcon from '@material-ui/icons/Close';


const Modal = ({active, setActive, children}: {
    active: boolean, setActive: Dispatch<SetStateAction<boolean>>,
    children: ReactNode;
}) => {

    return (
        <div className={`${active
            ? style.modalContainer + ' ' + style.active
            : style.modalContainer}`} onClick={() => setActive(false)}>
            <div className={`${active
                ? style.modalContent + ' ' + style.active
                : style.modalContent}`} onClick={e => e.stopPropagation()}>
                {children}
                <CloseIcon onClick={() => setActive(false)} className={style.buttonModal}/>
            </div>
        </div>
    );
};

export default Modal;