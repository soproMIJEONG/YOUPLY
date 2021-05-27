import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SearchBar from '../common/SearchBar';
import GoogleLoginButton from '../auth/GoogleLoginButton';
// import SubInfo from '../common/SubInfo';
// import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flx;
    align-items: baseline;
    .logo {
        font-size: 2.5rem;
        font-weight: 1000;
        letter-spacing: 1.75px;
        text-decoration: none;
        color: #c4302b;
        margin-top: 15px;
        margin-left: 20px;
    }
    .login {
        align-self: flex-end;
        margin-top: 15px;
        margin-right: 30px;
    }
    .logged {
        align-self: flex-end;
        width: 190.925px;
        height: 43.2px;
        margin-top: 15px;
        margin-right: 30px;
        font-weight: 540;
    }
`;

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    background-color: #c6fddb;
    display: flex;
    width: 352px;
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 3rem;
    
    /* 맨위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }

    p {
        margin-top: 2rem;
    }
    h3 {
        width: 352px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .item-image {
        width: 352px;
        height: 210px;
    }
    .item-title {
        width: 352px;
        text-decoration: none;
        margin-top: 0;
        color: ${palette.gray[9]}
    }
    .subdesc {
        align-self: flex-end;
    }
`;

const TagBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .tag-item {
        margin-right: 0.5rem;
    }
`;

const PostItem = ({ post }) => {

    const { createdDate, title, tags, id, username, thumbnail } = post;
    return (
        <PostItemBlock>
            <Link to={`/post/${id}`}><img className='item-image' src={thumbnail} /></Link>
            <h3>
                <Link className='item-title' to={`/post/${id}`}>{title}</Link>
            </h3>
            
            <p1 className="subdesc">{username} {createdDate}</p1>
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error, showWrittenButton }) => {
    if (error ) {
        return <PostListBlock>에러 발생</PostListBlock>;
    }

    if (loading || !posts) {
        return null;
    }

    return (
        <>
        <HeaderBlock>
            <Link to="/" className="logo">YOUPLY</Link>
            <SearchBar />
            {showWrittenButton ? 
                (<div className="logged">
                {showWrittenButton.username}님 안녕하세요.
                </div>) 
                : 
                (<div className="login">
                    <GoogleLoginButton />
                </div>)
            }
        </HeaderBlock>
        <PostListBlock>
            {/* 로딩중 아니고, 포스트배열이 존재할 때 */}
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post.id} />
                    ))}
                </div>
            )}
        </PostListBlock>
        </>
    );
};

export default PostList;