import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import LogIn from '@/components/LogIn';
import { API_TYPE } from '@/common/constants';

import 'bootstrap/scss/bootstrap.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(params, endpoint, verb = 'get') {
    const url = endpoint;
    const payloads = {
      get: { params, method: 'get', url },
      post: { data: params, method: 'post', url },
    };
    const { onSubmit } = this.props; // eslint-disable-line react/prop-types
    onSubmit(API_TYPE, payloads[verb]);
  }

  render() {
    return (<div className="container"><LogIn onSubmit={this.onSubmit} /></div>);
  }
}

// eslint-disable-next-line react/no-typos
App.PropTypes = {
  onSubmit: PropTypes.func,
};


export default connect(
  null,
  {
    onSubmit: (type, payload) => ({ type, payload }),
  },
)(App);
