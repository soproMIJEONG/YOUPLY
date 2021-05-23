import React from 'react'
import WritePlItem from './WritePlItem';
import styled from 'styled-components';

const ComponentBlock = styled.div`
    display: flex;
    flex-direction: column;
    .selectedPL {
        height: 180px;
        width: 320px;
    }
`;


const PlaylistBlock = styled.div`
    display: flex;
    overflow: auto;
    height: 225px;
    &::-webkit-scrollbar {
        width: 8px;
        height: 10px;
        background-color: #1a1a1f;
    
    }
    &::-webkit-scrollbar-thumb {
        background-color: #b4b4b4ea;
    }
`;

const WritePlList = ({ playlists, thumbnail, onChangeField }) => {

    const onChangePL = value => {
        onChangeField({ key: 'selectedPL', value: value })
    };

    const onChangeThumb = value => {
        onChangeField({ key: 'thumbnail', value: value })
    };

    const renderedPlaylists =  playlists.map((plItem) => {
        if (plItem.snippet.title === "Favorites") {
            return ;
        }
        return <WritePlItem 
                    id={plItem.id}
                    title={plItem.snippet.title} 
                    thumbnail={plItem.snippet.thumbnails.medium.url} 
                    onChangePL={onChangePL}
                    onChangeThumb={onChangeThumb} 
                />
        
    });
    return (
        <ComponentBlock>
            <PlaylistBlock>{renderedPlaylists}</PlaylistBlock>
            {thumbnail && <img className='selectedPL' src={thumbnail} />}
        </ComponentBlock>
    )
}

export default WritePlList;