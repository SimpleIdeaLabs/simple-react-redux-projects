import React from 'react';
import PostList from './components/posts/posts';
import NewPost from './components/posts/newPost';
import ViewPost from './components/posts/viewPost';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/create" exact component={NewPost} />
          <Route path="/posts/:id" exact component={ViewPost} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
