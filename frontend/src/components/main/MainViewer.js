import React from 'react';
import styled from 'styled-components';
import bg_main from '../../lib/styles/bg_main.png';
import GoogleLoginButton from '../auth/GoogleLoginButton';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    .logo {
        margin-bottom: 0px;
        margin-top: 1rem;
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
        margin-top: 15px;
        margin-right: 30px;
    }
    .logged {
        align-self: flex-end;
        width: 190.925px;
        height: 43.2px;
        margin-top: 15px;
        margin-right: 30px;
        font-weight: 540;
    }

`;

const ButtonBlock = styled.div`
    display: flex;
    margin-top: 2rem;
    width: 30%;
    justify-content: space-between;
`;

const MainViewer = ({ user }) => {
    
    return (
        <MainBlock>
            {user ? 
                (<div className="logged">
                {user.username}님 안녕하세요.
                </div>) 
                : 
                (<div className="login">
                    <GoogleLoginButton />
                </div>)
            }
            <h1 className="logo">YOUPLY</h1>
            <p1 className="subtitle"></p1>
            <SearchBar />
            <ButtonBlock>
                <Button red to="/posts">모든 재생목록 보기</Button>
                {user && 
                <Button className="upload-btn" red to="/write">재생목록 업로드</Button>
                }
            </ButtonBlock>
        </MainBlock>
    )
};

export default MainViewer;