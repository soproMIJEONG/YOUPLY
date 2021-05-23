import React, { useState } from 'react';
import youtube from '../../lib/api/youtube';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LoadPlaylistBlock = styled.div`
    display: flex;
`;

const ButtonBlock = styled.button`
    border-radius: 5px;
    outline: none;
        border: none;
        font-size: 1rem;
    cursor: pointer;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.cyan[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.cyan[6]};
        }
`;

const LoadPlaylistButton = ({ token, onChangeField }) => {
    const [playlists, setPlaylists] = useState();


    const loadPlaylists = async () => {
        const response = await youtube.get(`/playlists`, {
            params: {
                part: 'snippet,contentDetails,player',
                mine: true,
                access_token: token,
                token_type: "Bearer",
            }
        })
        
        console.log("playlist api resources: ", response);
        // console.log("playlistItem api resources: ", response2);
        
        setPlaylists(response.data.items);
        onChangeField({
            key: 'playlists',
            value: response.data.items
        });
    }
    


    return (
        <LoadPlaylistBlock>
            <ButtonBlock onClick={loadPlaylists}>플레이리스트 불러오기</ButtonBlock>
            
        </LoadPlaylistBlock>
    );
};
export default LoadPlaylistButton;