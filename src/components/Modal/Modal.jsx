
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";


const modal = document.querySelector('#root-modal')
console.log(modal)

const Modal = ({children, onClose}) => {
    
    useEffect(() => {
        const handleEscape = (e) => {
            if(e.code === 'Escape'){
                onClose()
            }
        }
        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
        } 
    }, [onClose])

    const handleClose = (e) => {
        if(e.target === e.currentTarget){
            onClose()
        }
    }
    return (
        
        createPortal (
            <Backdrop onClick={handleClose}>
            <ModalContent>
                {children}
            </ModalContent>
        </Backdrop> , 
        modal
        )
        
    )
}

export default Modal;