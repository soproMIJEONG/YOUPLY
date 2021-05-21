import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';
import { useDispatch, useSelector } from 'react-redux';

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, selectedPL, username, thumbnail, postError, originalPostId } = useSelector(({ write, user }) => ({    
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        selectedPL: write.selectedPL,
        username: user.user.username,
        thumbnail: write.thumbnail,
        postError: write.postError,
        originalPostId: write.originalPostId,
    }));

    const onPublish = () => {
        if (originalPostId) {
            dispatch(updatePost({ id: originalPostId, title, body, tags, selectedPL, username, thumbnail }));
            // history.push(`/@:${username}/${selectedPL}`);
            return;
        }
        dispatch(writePost({ title, body, tags, selectedPL, username, thumbnail }));
        // history.push(`/@:${username}/${selectedPL}`);
    };

    const onCancel = () => {
        history.goBack();
    };
    
    useEffect(() => {
        if (post) {
            history.push(`/${post}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);
    
    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={originalPostId} />;
};

export default withRouter(WriteActionButtonsContainer);