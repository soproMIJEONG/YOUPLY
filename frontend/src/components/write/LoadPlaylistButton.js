import React from 'react';
import youtube from '../../lib/api/youtube';


const LoadPlaylistButton = ({ token }) => {

    const loadPlaylists = async () => {
        const response = await youtube.get(`/playlists`, {
            params: {
                mine: true,
                access_token: token,
                token_type: "Bearer",
            }
        })
        console.log("playlist api resources: ", response);
    }
    
    return (
        <button onClick={loadPlaylists}>LoadPlaylist</button>
    );
};
export default LoadPlaylistButton;