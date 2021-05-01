import React from 'react';

const VideoItem = ({video}) => {
    return (
        <>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </>
    )
};
export default VideoItem;