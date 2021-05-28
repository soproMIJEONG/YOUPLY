import React, { useEffect } from 'react';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PostListContainer = ({ match, location }) => {
    const dispatch = useDispatch();
    const { posts, error, loading, user } = useSelector(({ posts, user, loading }) => ({
        posts: posts.posts,
        error: posts.error,
        user: user.user,
        loading: loading['posts/LIST_POSTS'],
    }));

    // URL 에서 쿼리, 파라미터 값 가져와서 api 로
    useEffect(() => {
        // const { searchType } = match.params;
        const { searchType, searchKeyword, page } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        console.log(searchType);
        console.log(searchKeyword);
        console.log(page);
        dispatch(listPosts({ page, searchKeyword, searchType }));
    }, [dispatch, location.search]);

    return (
        <PostList loading={loading} posts={posts} error={error} showWrittenButton={user} />
    );
};

export default withRouter(PostListContainer);