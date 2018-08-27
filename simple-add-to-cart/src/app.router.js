import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Layout from './components/layout/layout';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/Checkout" exact component={Checkout} />
            </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default AppRouter;