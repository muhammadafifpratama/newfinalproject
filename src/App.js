import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import rumah from "./page/home"
import Navbar from "./component/navbar"
import Login from './page/login'
import Register from './page/register'
import tes from './page/tes'
import detail from './page/gamedetails'

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
          <Route path='/asd' component={tes} />
          <Route path='/game' component={detail} />
          {/* <Route path="/asd" component={navbar} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;