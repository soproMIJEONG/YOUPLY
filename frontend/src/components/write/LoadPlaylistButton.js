import React from 'react';
import youtube from '../../lib/api/youtube';


const LoadPlaylistButton = () => {
    
    const loadPlaylists = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: "music"
            }
        })
        console.log("log: ", response);
    }
    
    return (
        <button onClick={loadPlaylists}>BUTTON</button>
    );
};
export default LoadPlaylistButton;