import React from 'react';
import  styled  from 'styled-components'
import { Link } from 'react-router-dom'

const CreateContact = () => {
    return (
        <StyledCreateContact>
            <Link to="/contacts/create"><img src="createContact.png" alt="" /></Link>
        </StyledCreateContact>
    );
};

export default CreateContact;

const StyledCreateContact = styled.div`
    width: 200px;
    height: 250px;
    margin: auto;
    margin-top: 70px;
    border: 1px solid #e6edf3;
    border-radius: 15px;

    img{
        width: 200px;
        height: 250px;  
    }
    
    :hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.08);
    }
`