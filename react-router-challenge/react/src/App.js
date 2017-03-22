import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Layout from './components/Layout'

import Root from './components/Root';
import routes from './routes';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Root browserHistory={browserHistory} routes={routes} />
    )
  }
}

export default App;
