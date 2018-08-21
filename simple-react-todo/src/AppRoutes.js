import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Layout from './components/HOC/Layout';
import TodoEdit from './components/Todos/TodoEdit';
import TodoLists from './components/Todos/TodoLists';
import TodoCreate from './components/Todos/TodoCreate';

class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todos" exact component={TodoLists} />
            <Route path="/todos/:id/edit" exact component={TodoEdit} />
            <Route path="/todos/create" exact component={TodoCreate} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default AppRoutes;