import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { changeField, login } from '../../modules/user';

const CLIENTKEY =process.env.REACT_APP_CLIENT_KEY; 

const GoogleLoginButton = ({ onChange, onSubmit }) => {
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    const responseGoogle = response => {
        const newUser = {
            username: response.profileObj.name,
            userId: response.profileObj.googleId,
            token: response.accessToken,
        }  
        setUser(newUser);

        dispatch(
            changeField({
                key: 'user',
                value: newUser
            })
        );
   
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
            buttonText="구글계정으로 로그인"
        />
    );
    
}

export default GoogleLoginButton;