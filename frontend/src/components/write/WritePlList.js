import React from 'react'
import WritePlItem from './WritePlItem';

const WritePlList = ({ playlists, onChangeField }) => {

    const onChangePL = value => {
        onChangeField({ key: 'selectedPL', value: value })
    };

    const onChangeThumb = value => {
        onChangeField({ key: 'thumbnail', value: value })
    };

    const renderedPlaylists =  playlists.map((plItem) => {
        return <WritePlItem 
                    id={plItem.id}
                    title={plItem.snippet.title} 
                    thumbnail={plItem.snippet.thumbnails.medium.url} 
                    onChangePL={onChangePL}
                    onChangeThumb={onChangeThumb} 
                />
        
    });
    return <div className='ui relaxed divided list'>{renderedPlaylists}</div>;
}

export default WritePlList;