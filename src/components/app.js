import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>

            <h1>Clayton Smith's Portfolio</h1>

            <div>{moment().format('MMMM Do YYYY, h:mm a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-me" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
