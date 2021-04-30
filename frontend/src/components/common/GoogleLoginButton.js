import React from 'react';
import { GoogleLogin } from 'react-google-login';
const CLIENTKEY =process.env.REACT_APP_CLIENT_KEY; 

const responseGoogle = response => {
    console.log(response);
}

const GoogleLoginButton = () => {
    return (
        <GoogleLogin 
            clientId={CLIENTKEY}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    );
};

export default GoogleLoginButton;