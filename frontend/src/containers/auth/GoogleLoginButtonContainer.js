import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLoginButton from '../../components/auth/GoogleLoginButton';
import { changeField, initializeFrom, login } from '../../modules/user';
import { check } from '../../modules/user';

const GoogleLoginButtonContainer = ({ history }) => {
    const dispatch = useDispatch();
   
    const { auth, authError, user } = useSelector(({ auth, user }) => ({
        auth: user.auth,
        authError: user.authError,
        user: user.user
    }));
    
    const onChange = (value) => {
        dispatch(
            changeField({
                key: 'user',
                value: value,
            })
        );
    }
    /*
    const onSubmit = () => {
        const { username, userId, token} = user;
        dispatch(login({ username, userId, token }));
    }
    */
    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch]);
    
    useEffect(() => {
        if (user) {
            try {
                localStorage.setItem('user', JSON.stringify(form));
            } catch (e) {
                console.log('localstorage not working');
            }
        }
    }, [history, user]);

    return <GoogleLoginButton onChange={onChange} onSubmit={onSubmit} /> 
}

export default GoogleLoginButtonContainer;