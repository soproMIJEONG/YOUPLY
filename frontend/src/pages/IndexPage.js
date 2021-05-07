import React from 'react';
import Button from '../components/common/Button';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import VideoList from '../components/video/VideoList';
import WriteButton from '../components/common/WriteButton';

const IndexPage = () => {
    return (
        <>
            <div>시작페이지</div>
            <Button>버튼</Button>
            <GoogleLoginButton />
            <VideoList />
            <WriteButton />
        </>
    );
};

export default IndexPage;