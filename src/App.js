import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import rumah from "./page/home"
import Navbar from "./component/navbar"
import Login from './page/login'
import Register from './page/register'
import detail from './page/gamedetails'
import latian from './page/asd'
import searchbar from './page/search'
import profile from './page/profile'
import inventory from './page/inventory'
import cart from './page/cart'
import asd from './page/tes'

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={rumah} exact />
          <Route path="/register" component={Register} />
          <Route path='/game' component={detail} />
          <Route path="/tes" component={latian} />
          <Route path="/search" component={searchbar} />
          <Route path="/profile" component={profile} />
          <Route path="/inventory" component={inventory} />
          <Route path="/cart" component={cart} />
          <Route path="/aaa" component={asd} />
        </Switch>
      </div>
    );
  }
}

export default App;