import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import PostPage from './pages/PostPage';
import PostsListPage from './pages/PostsListPage';
import RankingPage from './pages/RankingPage';
import WritePage from './pages/WritePage';
const App = () => {
  return (
    <>
      <Route component={IndexPage} path="/" exact />
      <Route component={PostPage} path="/post" />   {/* /@:username/:postId */}
      <Route component={PostsListPage} path="/postsList" /> {/* /@:username */}
      <Route component={RankingPage} path="/ranking" />     {/* /@:tag */}
      <Route component={WritePage} path="/write" />
    </>
  );
};

export default App;