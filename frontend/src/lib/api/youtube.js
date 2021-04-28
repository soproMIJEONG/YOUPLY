import axios from 'axios';
const KEY = 'AIzaSyBl1rTyJo89Jhn2jPrt9M1XWdGfxhl4JpI'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})