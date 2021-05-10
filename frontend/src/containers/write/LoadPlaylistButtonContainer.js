import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadPlaylistButton from '../../components/write/LoadPlaylistButton.js';
import { changeField } from '../../modules/write';

const LoadPlaylistButtonContainer = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(({ user }) => ({   
        token: user.user.token
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),  
    [dispatch]);
    return <LoadPlaylistButton token={token} onChangeField={onChangeField} />
}

export default LoadPlaylistButtonContainer;