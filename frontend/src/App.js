import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import PostsListPage from './pages/PostsListPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>YOUPLY</title>
      </Helmet>
      <Route component={MainPage} path="/" exact />
      <Route component={PostPage} path="/post/:postId" />
      <Route component={PostsListPage} path={['/posts/:searchType', '/posts']} exact /> {/* /@:username */}
      <Route component={WritePage} path="/write" />
    </>
  );
};

export default App;