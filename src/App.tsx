import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home.component';
import { BlogDetail } from './components/Blogs/BlogDetail.component';


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/singleBlog" component={BlogDetail} />
    </BrowserRouter>
  );
};
