import React from 'react';
import VideoList from '../../components/video/VideoList';
import { useSelector, useDispatch } from 'react-redux';

const VideoListContainer = () => {
    const dispath = useDispatch();
    // useSelector 

    return <VideoList />;
}

export default VideoListContainer;