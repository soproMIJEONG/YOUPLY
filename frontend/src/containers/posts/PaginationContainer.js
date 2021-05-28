import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import Pagination from '../../components/posts/Pagination';

const PaginationContainer = ({ match, location }) => {
    const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
        lastPage: posts.posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    if (!posts.posts || loading ) return null;

    const { searchType, searchKeyword, page = 1 } = qs.parse(location.search, {   // ?searchKeyword= , ?page=
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
