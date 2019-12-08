import { connect } from 'react-redux';
import React from 'react';
import LogIn from '~/components/LogIn';
import { API_TYPE } from '~/common/constants';

import 'bootstrap/scss/bootstrap.scss';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (params, endpoint, verb='get') {
    const url = endpoint;
    const payloads = {
      'get': { params, method: 'get', url },
      'post': { data: params, method: 'post', url },
    };
    this.props.onSubmit(API_TYPE, payloads[verb]);
  }

  render () {
    return (<div className="container"><LogIn onSubmit={this.onSubmit}/></div>)
  }
};

export default  connect(
  (state, ownProps) => { console.log('update state', state); return {}; },
  {
    onSubmit: (type, payload) => ({ type, payload }),
  }
)(App);
