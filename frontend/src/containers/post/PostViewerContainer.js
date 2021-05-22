import React, { useEffect } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import { withRouter } from 'react-router-dom';

const PostViewerContainer = ({ match, history }) => {
    // 처음 마운트될 때 readpost API 요청
    const { postId } = match.params;
    
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({ post, loading }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST']
    }));


    useEffect(() => {
        dispatch(readPost(postId));
        console.log(postId);
        // remove post data when unmount
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    return <PostViewer post={post} loading={loading} error={error} />;
}

export default withRouter(PostViewerContainer);