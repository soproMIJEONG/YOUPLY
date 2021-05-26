import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import Pagination from '../../components/posts/Pagination';

const PaginationContainer = ({ match, location }) => {
    const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    // 포스트 데이터없거나 로딩중이면 아무것도 안보여줌
    if (!posts || loading ) return null;

    const { searchType } = match.params;  // /@username
    const { searchKeyword, page = 1 } = qs.parse(location.search, {   // ?searchKeyword= , ?page=
        ignoreQueryPrefix: true,
    });

    return (
        <Pagination
            searchType={searchType}
            searchKeyword={searchKeyword}
            page={parseInt(page, 10)}
            lastPage={lastPage}
        />
    );
};

export default withRouter(PaginationContainer);
