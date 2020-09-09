import React from 'react';
import { StyledLoading } from './../styles/styled'

const LoadingCircle = ({ title, border, size }) => {
    return (
        <StyledLoading
            border = {border}
            size = {size}>
            <h3>{title}</h3>
            <div></div>
        </StyledLoading>
    );
};

export default LoadingCircle;