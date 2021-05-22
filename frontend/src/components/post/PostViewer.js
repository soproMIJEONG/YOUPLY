import React, { useState, useEffect } from 'react';
import youtube from '../../lib/api/youtube';

const PostViewer = ({ post, error, loading }) => {
   
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