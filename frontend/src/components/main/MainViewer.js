import React, { useState } from 'react';
import styled from 'styled-components';
import bg_main from '../../lib/styles/bg_main.png';
import GoogleLoginButton from '../auth/GoogleLoginButton';
import SearchBar from './SearchBar';

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    .logo {
        margin-bottom: 0px;
        font-size: 6rem;
        font-weight: 1000;
        letter-spacing: 2.75px;
        text-decoration: none;
        color: #c4302b;
    }
    .subtitle {
        font-weight: 600;
        color: #c4302b;
        margin-bottom: 30px;
    }
    .login {
        align-self: flex-end;
    }
    
`;

const MainViewer = () => {
    
    
    return (
        <MainBlock>
            <div className="login">
                <GoogleLoginButton />
            </div>
            <h1 className="logo">YOUPLY</h1>
            <p1 className="subtitle"></p1>
            <SearchBar />
        </MainBlock>
    )
};

export default MainViewer;