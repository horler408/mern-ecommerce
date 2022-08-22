import React, { Component } from 'react';
import AddItem from './AddItem';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Orders from './Orders';
import Register from './validation/Register';
import Login from './validation/Login';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addItem">
            <AddItem />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          {/* <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(Main));
