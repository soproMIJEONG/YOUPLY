import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components'
import PlayItemListContainer from '../../containers/post/PlayItemListContainer';
import { Link } from 'react-router-dom';

const PageBlock = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: #1a1a1f;
    color: #ccc9c9;
`;

const HeaderBlock = styled.div`
    display: flex;
    height: 7rem;
    align-items: flex-start;
    justify-content: space-evenly; 
    .logo {
        font-size: 2.5rem;
        font-weight: 1000;
        letter-spacing: 1.75px;
        text-decoration: none;
        color: #c4302b;
        margin-top: 15px;
    }
`;


const BodyWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const PostBlock =  styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
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

const ListBlock = styled.div`
    display: flex;
    flex-direction: column;
    .list-text {
        align-self: center;
    }
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {

    if (error) {
        if (error.response && error.response.status === 404) {
            return <h1>존재하지 않는 게시글입니다.</h1>;
        }
        return <h1>오류 발생</h1>
    }

    // props 받아오는거 기달
    if (loading || !post) {
        return null;
    }

    // post 정보들
    const { title, body, tags, modifiedTime, username } = post;

    return (
        <PageBlock>
            <HeaderBlock>
                <Link to="/" className="logo">YOUPLY</Link>
            </HeaderBlock>
            <BodyWrapper>
                <PostBlock>
                        <iframe 
                            width="800" 
                            height="450" 
                            src={`http://www.youtube.com/embed/videoseries?list=${post.selectedPL}`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        <h1>{title}</h1>
                        <TagBlock>
                            {tags.map((tag) => {
                                return(<p1 className="tag-item">#{tag}</p1>);  
                            })}
                        </TagBlock>
                        <p1 className="subdesc">{username} {modifiedTime}</p1>
                        {actionButtons}
                        <h4>{body}</h4>
                </PostBlock>
                <ListBlock>
                    <h2 className="list-text">재생목록</h2>
                    <PlayItemListContainer />
                </ListBlock>
            </BodyWrapper>
        </PageBlock>
    )
}

export default PostViewer;