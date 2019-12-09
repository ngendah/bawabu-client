import React from 'react';
import PropTypes from 'prop-types';
import { Endpoints } from '@/common/constants';

import './styles.scss';


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_id: 'c2ce91a6-98b6-4d4b-99ad-eeb174c0b6d5',
      user_uid: '',
      password: '',
      grant_type: 'user_credentials',
      refresh: true,
    };
    this.submit = props.onSubmit;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submit(this.state, Endpoints.AUTH);
  }

  render() {
    return (
      <div className="d-flex justify-content-end">
        <form
          onSubmit={this.handleSubmit}
          className="d-flex flex-column align-items-center login"
        >
          <div className="form-group">
            <label htmlFor="user_uid">
              User
              <input
                id="user_uid"
                onChange={this.handleChange}
                className="form-control"
                name="user_uid"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                id="password"
                onChange={this.handleChange}
                type="password"
                className="form-control"
                name="password"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">LogIn</button>
        </form>
      </div>
    );
  }
}

LogIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LogIn;
