import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { changeField, login } from '../../modules/user';

const CLIENTKEY =process.env.REACT_APP_CLIENT_KEY; 

const GoogleLoginButton = ({ onChange, onSubmit }) => {
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const scopes = [
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.force-ssl',
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/youtubepartner'
    ]

    const responseGoogle = response => {
        const newUser = {
            username: response.profileObj.name,
            userId: response.profileObj.googleId,
            token: response.accessToken,
        }  
        setUser(newUser);
        // 임시
        dispatch(
            changeField({
                key: 'user',
                value: newUser
            })
        );
        /*
        const { username, userId, token } = user;
        dispatch(
            login({ username, userId, token })
        );
        */
      
    };


    const responseError = response => {
        console.log(response);
    }

    return (
        <GoogleLogin 
            clientId={CLIENTKEY}
            onSuccess={responseGoogle}
            onFailure={responseError}
            scope='https://www.googleapis.com/auth/youtube'
        />
    );
    
}

export default GoogleLoginButton;