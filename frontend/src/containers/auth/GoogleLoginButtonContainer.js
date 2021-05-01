import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLoginButton from '../../components/auth/GoogleLoginButton';
import { changeField } from '../../modules/auth';

const GoogleLoginButtonContainer = () => {
    const dispatch = useDispatch();
   
    const { users } = useSelector(({ auth }) => ({
        users: auth.user
    }));
   
    const onChangeUser = value => {
        dispatch(
            changeField({
                key: 'user',
                value: value,
            })
        )
    }
    
    useEffect(() => {
        dispatch(initializeForm('user'))
    }, [dispatch]);

    return <GoogleLoginButton users={users} useronChangeUser={onChangeUser} /> 
}

export default GoogleLoginButtonContainer;