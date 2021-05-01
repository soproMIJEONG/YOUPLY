import React from 'react';
import Button from '../components/common/Button';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import VideoList from '../components/video/VideoList';
import LoadPlaylistButtonContainer from '../containers/write/LoadPlaylistButtonContainer';

const IndexPage = () => {
    return (
        <>
            <div>시작페이지</div>
            <Button>버튼</Button>
            <GoogleLoginButton />
            <VideoList />
            <LoadPlaylistButtonContainer />
        </>
    );
};

export default IndexPage;