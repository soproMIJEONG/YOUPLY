import React, { useState, useEffect } from 'react';
import youtube from '../../lib/api/youtube';
import PlayItem from './PlayItem';

const PlayItemList = ({ post }) => {
    const [items, setItems] = useState([]);

    const loadVideos = async () => {
        const response = await youtube.get(`/playlistItems`, {
            params: {
                part: 'snippet',
                playlistId: post.selectedPL
            }
        })
        console.log(response);
        setItems(response.data.items);
    }

    useEffect(() => {
        loadVideos();
    }, []);

    const renderedItems = items.map((item) => {
        return (
            <PlayItem 
                title={item.snippet.title} 
                thumbnail={item.snippet.thumbnails.medium.url}  
            />
        )
    });

    return <div>{renderedItems}</div>;
}

export default PlayItemList;