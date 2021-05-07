import client from './client';


export const login = ({ username, userId }) => 
    client.post('/api/auth/login', { username, userId });

export const logout = () => client.post('/api/auth/logout');

    // check login status
export const check = () => client.get('/api/auth/check');