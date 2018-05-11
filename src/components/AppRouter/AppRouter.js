import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ShowPage from '../ShowPage/ShowPage'
import Search from '../Search/Search'
import './AppRouter.css'

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/shows/:id" component={ShowPage} />
          <Route path="/" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;

