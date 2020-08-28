import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer} from './Buttton';

export default class Footer extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  bg-dark navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-3">
                    <Link to='/' className="nav-link">
                    
                    <p className="text-white  mb-0">Thank you :)</p>
                    </Link>
                    </li>

                    </ul>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
bachground:gray;
.nav-link{
    color:var(--mainwhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`