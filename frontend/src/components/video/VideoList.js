import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const videoList =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    });

    return <div className='ui relaxed divided list'>{videoList}</div>;
};
export default VideoList;