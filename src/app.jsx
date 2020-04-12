import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import LogIn from '~/components/LogIn';
import Dashboard from '~/components/Dashboard';
import { API_TYPE } from '~/common/constants';

import 'bootstrap/scss/bootstrap.scss';
import '~/assets/styles/styles.scss';


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
    const isAuthenticated = this.props.user.isAuthenticated;
    return (<Dashboard />);
    //return (<LogIn onSubmit={this.onSubmit} />);
  }
}

// eslint-disable-next-line react/no-typos
App.PropTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
};


export default connect(
  (state, ownProps) => {
    if(state)
      return {user: state.user};
    return {user: {}};
  },
  {
    onSubmit: (type, payload) => ({ type, payload }),
  },
)(App);
