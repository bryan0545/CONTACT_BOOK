import React from 'react';
import {ContactCard, CardButton} from './../styles/styled';

const ContactInfo = ({ id, firstName, lastName, phoneNumber, email, contactState, handelEdit, handelDelete, deleting }) => {
    return (        
        <ContactCard>
            <h2>{firstName} {lastName}</h2>
            <p>Phone number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>State: {contactState}</p>
            <div>
                <CardButton disabled={deleting} onClick = {handelEdit}>Edit</CardButton>
                <CardButton disabled={deleting} onClick = {handelDelete}>Delete</CardButton>
            </div>
        </ContactCard>
    );
};

export default ContactInfo;