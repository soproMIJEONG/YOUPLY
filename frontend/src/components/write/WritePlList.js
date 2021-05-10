import React from 'react'
import WritePlItem from './WritePlItem';

const WritePlList = ({ playlists, handlePLSelect }) => {
    const renderedPlaylists =  playlists.map((plItem) => {
        return <WritePlItem 
                    id={plItem.id}
                    title={plItem.snippet.title} 
                    thumbnail={plItem.snippet.thumbnails.medium.url} 
                    handlePLSelect={handlePLSelect} 
                />
        
    });
    return <div className='ui relaxed divided list'>{renderedPlaylists}</div>;
}

export default WritePlList;