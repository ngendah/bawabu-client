/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-unresolved
import LogIn from '~/components/LogIn';

import 'bootstrap/scss/bootstrap.scss';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.reducer = this.reducer.bind(this);
    this.store = createStore(this.reducer);
  }

  reducer (state, action) {
    return state;
  }

  onSubmit (type, params) {
    this.store.dispatch({type, params});
  }

  render () {
    return (<div className="container"><LogIn onSubmit={this.onSubmit}/></div>)
  }
};

ReactDom.render(<App />, document.getElementById('root'));
