import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadPlaylistButton from '../../components/write/LoadPlaylistButton.js';

const LoadPlaylistButtonContainer = () => {
    const dispath = useDispatch();
    const { token } = useSelector(({ user }) => ({   // title값과 body값을 리덕스 스토어에서 불러옴
        token: user.user.token
    }));

    return <LoadPlaylistButton token={token} />
}

export default LoadPlaylistButtonContainer;