import React from 'react';
import { useSelector } from 'react-redux';
import PlayItemList from '../../components/post/PlayItemList';

const PlayItemListContainer = () => {
    const { post } = useSelector(({ post }) => ({   
        post: post.post
    }));

    return <PlayItemList post={post} />
}

export default PlayItemListContainer;