import React, { useState } from 'react';
import youtube from '../../lib/api/youtube';


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
        /*
        const response2 = await youtube.get('/playlistItems', {
            params: {
                mine: true,
                access_token: token,
                token_type: "Bearer"
            }
        })
        */
        console.log("playlist api resources: ", response);
        // console.log("playlistItem api resources: ", response2);
        
        setPlaylists(response.data.items);
        onChangeField({
            key: 'playlists',
            value: response.data.items
        });
    }
    


    return (
        <button onClick={loadPlaylists}>LoadPlaylist</button>
    );
};
export default LoadPlaylistButton;