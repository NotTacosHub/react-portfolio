import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Clayton Smith's Portfolio</h1>
        <h2>Big Poppa's Projects</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm a')}
        </div>
      </div>
    );
  }
}
