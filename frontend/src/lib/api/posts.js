import client from './client';
import qs from 'qs';

// 포스트 쓰기
export const writePost = ({ title, body, tags, selectedPL, username, thumbnail, userId }) =>
    client.post('/api/posts', { title, body, tags, selectedPL, username, thumbnail, userId });

// 포스트 읽기
export const readPost = id => client.get(`/api/posts/${id}`);

// 포스트 리스트
export const listPosts = ({ page, searchKeyword, searchType }) => {
    const queryString = qs.stringify({
        page,
        searchKeyword,
        searchType,
    });
    return client.get(`/api/posts?${queryString}`)  // /api/posts?username=&tag=&page=
};

// 포스트 수정
export const updatePost = ({ id, title, body, tags, selectedPL, username, thumbnail }) => 
    client.patch(`/api/posts/${id}`, { title, body, tags, selectedPL, username, thumbnail });

// 포스트 삭제
export const removePost = id => client.delete(`/api/posts/${id}`);