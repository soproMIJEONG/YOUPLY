import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/auth';

const CLIENTKEY =process.env.REACT_APP_CLIENT_KEY; 

const GoogleLoginButton = ({ users, onChangeUser }) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    const responseGoogle = response => {
        const newUser = {
            userid: response.profileObj.googleId,
            username: response.profileObj.name,
            token: response.accessToken,
        }  
        setUser(newUser);
        // 임시
        dispatch(
            changeField({
                key: 'user',
                value: newUser,
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
        />
    );
    
}

export default GoogleLoginButton;