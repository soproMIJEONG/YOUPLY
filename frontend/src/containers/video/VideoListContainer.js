import React from 'react';
import VideoList from '../../components/video/VideoList';
import { useSelector, useDispatch } from 'react-redux';
import youtube from '../../lib/api/youtube.js';

const VideoListContainer = () => {
    // const dispath = useDispatch();
    // useSelector 
    buttonHandler = async () => {
        const response = await youtube.get('/search', {
            params: {
                part: "snippet",
                q: "music",
            }
        })
        console.log("log: ", response);
    }
    return <VideoList buttonHandler={buttonHandler}/>;
}

export default VideoListContainer;