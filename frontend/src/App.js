import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
const App = () => {
  return (
    <>
      <Route component={IndexPage} path="/" exact />
    </>
  );
};

export default App;