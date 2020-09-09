import React from 'react';
import { Link } from 'react-router-dom'

import {StyledNavbar, StyledList, StyledListitems} from './../styles/styled';

const Navigation = () => {
    return (
        <StyledNavbar>
            <ul>
                <li><Link to="/contacts/create" >Create contact</Link></li>
                <li> <Link to="/contacts">Contacts</Link ></li>
            </ul>
        </StyledNavbar>
    );
};

export default Navigation;