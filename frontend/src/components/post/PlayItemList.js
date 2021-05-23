import React, { useState, useEffect } from 'react';
import youtube from '../../lib/api/youtube';
import PlayItem from './PlayItem';
import styled from 'styled-components';

const ItemListBlock = styled.div`
    overflow: auto;
    height: 600px;
    &::-webkit-scrollbar {
        width: 8px;
        background-color: #1a1a1f;
    
    }
    &::-webkit-scrollbar-thumb {
        background-color: #b4b4b4ea;
    }
`;

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
                key={item.id}
                title={item.snippet.title} 
                thumbnail={item.snippet.thumbnails.medium.url} 
            />
        )
    });

    return (
        <ItemListBlock>{renderedItems}</ItemListBlock>
    );
}

export default PlayItemList;