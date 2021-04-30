import React from 'react';
import Button from '../components/common/Button';
import GoogleLoginButton from '../components/common/GoogleLoginButton';

const IndexPage = () => {
    return (
        <>
            <div>시작페이지</div>
            <Button>버튼</Button>
            <GoogleLoginButton />
        </>
    );
};

export default IndexPage;