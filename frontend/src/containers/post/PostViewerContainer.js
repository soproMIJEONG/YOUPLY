import React, { useEffect } from 'react';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import { setOriginalPost } from '../../modules/write';
import { withRouter } from 'react-router-dom';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = ({ match, history }) => {
    // 처음 마운트될 때 readpost API 요청
    const { postId } = match.params;
    
    const dispatch = useDispatch();
    const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
        user: user.user
    }));


    useEffect(() => {
        dispatch(readPost(postId));
        console.log(postId);
        // remove post data when unmount
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);
    
    const onEdit = () => {
        dispatch(setOriginalPost(post));
        history.push('/write');
    };

    const onRemove = async () => {
        try {
            await removePost(postId);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    const ownPost = (user && user.userId) === (post && post.userId);

    return (
        <PostViewer 
            post={post} 
            loading={loading} 
            error={error} 
            actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
        />
    );
}

export default withRouter(PostViewerContainer);