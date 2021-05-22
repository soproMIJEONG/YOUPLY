import React, { useState, useEffect } from 'react';
import youtube from '../../lib/api/youtube';
import { Helmet } from 'react-helmet-async';

const PostViewer = ({ post, error, loading }) => {

    if (error) {
        if (error.response && error.response.status === 404) {
            return <h1>존재하지 않는 게시글입니다.</h1>;
        }
        return <h1>오류 발생</h1>
    }
   
    const loadVideos = async () => {
        const response = await youtube.get(`/playlistItems`, {
            params: {
                part: 'id',
                playlistId: post.selectedPL
            }
        })
        console.log(response);
    }

    // 페이지 접근 시 youtube api 호출
    {!loading && post && loadVideos()}

    return (
        <>
            <Helmet>
                <title>{post.title} - YOUPLY</title>
            </Helmet>
            <h1>{post.title}</h1>
            {!loading && post && 
            <iframe 
                width="854" 
                height="480" 
                src={`http://www.youtube.com/embed/videoseries?list=${post.selectedPL}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            }
            <d>{post.body}</d>
        </>
    )
}

export default PostViewer;