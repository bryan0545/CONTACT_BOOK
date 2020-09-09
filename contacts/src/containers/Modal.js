import React from 'react';
import {StyledModal, StyledModalContent} from './../styles/styled'
import LoadingCircle from './LoadingCircle'

const Modal = ({title}) => {
    return (
        <StyledModal>
            <StyledModalContent>               
            <LoadingCircle 
            title ={title}           
            border= {"5px"}
            size= {"16px"} ></LoadingCircle>
            </StyledModalContent>
        </StyledModal>
    );
};

export default Modal;