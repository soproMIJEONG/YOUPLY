import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import IndexPage from './pages/IndexPage';
import PostPage from './pages/PostPage';
import PostsListPage from './pages/PostsListPage';
import RankingPage from './pages/RankingPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>YOUPLY</title>
      </Helmet>
      <Route component={IndexPage} path="/" exact />
      <Route component={PostPage} path="/@:username/:playlistid" />   
      <Route component={PostsListPage} path={['/@:searchKeyword', '/postslist']} exact /> {/* /@:username */}
      <Route component={RankingPage} path="/ranking" />     {/* /@:tag */}
      <Route component={WritePage} path="/write" />
    </>
  );
};

export default App;