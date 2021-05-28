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

const ComponenetWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

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
    display: flex;
    width: 90%;
    flex-direction: row;
    margin-top: 3rem;
    flex-wrap: wrap;
    flex: 1 1 30%;
`;

const PostItemBlock = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: #fcf5f5;
    width: 352px;
    height: auto;
    margin: 1.5rem;
    margin-left: 4.0rem;
    margin-right: 4.0rem;
    padding-top: 0;
    padding-bottom: 0.5rem;
    border: 7px solid;
    border-image: linear-gradient(to right, #ff7777bc, #cdffd4aa, #65d3ffaa);
    border-image-slice: 1;
    
    p {
        margin-top: 2rem;
    }
    h3 {
        width: 352px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0;
        margin-bottom: 0.25rem;
        text-align: center;
        font-weight: normal;
    }
    .item-image {
        width: 352px;
        height: 210px;
    }
    .item-title {
        width: 352px;
        text-decoration: none;
        margin-top: 0;
        color: black;
    }
    .subdesc {
        align-self: flex-end;
        margin-right: 0.5rem;
    }
`;

const TagBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    margin-bottom: 0.5rem;
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
            <TagBlock>
                {tags.map((tag) => {
                    return(<p1 className="tag-item">#{tag}</p1>);  
                })}
            </TagBlock>
            <p1 className="subdesc">{username} {createdDate}</p1>
            
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error, user }) => {
    if (error ) {
        return <PostListBlock>에러 발생</PostListBlock>;
    }

    if (loading || !posts.posts) {
        return null;
    }

    return (
        <ComponenetWrapper>
        <HeaderBlock>
            <Link to="/" className="logo">YOUPLY</Link>
            <SearchBar />
            {user ? 
                (<div className="logged">
                    {user.username}님 안녕하세요.
                </div>) 
                : 
                (<div className="login">
                    <GoogleLoginButton />
                </div>)
            }
        </HeaderBlock>
        <PostListBlock>
            {/* 로딩중 아니고, 포스트배열이 존재할 때 */}
            {!loading && posts.posts && (
                <div>
                    {posts.posts.map(post => (
                        <PostItem className="item" post={post} key={post.id} />
                    ))}
                </div>
            )}
        </PostListBlock>
        </ComponenetWrapper>
    );
};

export default PostList;