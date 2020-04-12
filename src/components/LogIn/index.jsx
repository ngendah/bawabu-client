import React from 'react';
import PropTypes from 'prop-types';
import { Endpoints } from '~/common/constants';

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
    const authState = this.props.authState;
    let inputClassName = "form-control";
    if(authState==false)
      inputClassName = "form-control is-invalid"
    return (
      <div className="d-flex align-items-center justify-content-center h-100">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column align-items-center col-lg-3 col-md-5 col-sm-11">
          <div className="text-left text-danger ml-2 mb-3 w-100">User name or password is required</div>
          <div className="form-group w-100 mb-4">
            <label htmlFor="user-uid" className="ml-2"> User name </label>
            <input id="user-uid" onChange={this.handleChange} className={inputClassName} name="user_uid"/>
          </div>
          <div className="form-group w-100 mb-4">
            <label htmlFor="password" className="ml-2"> Password </label>
            <input id="password" onChange={this.handleChange} type="password" className={inputClassName} name="password"/>
          </div>
          <button type="submit" className="btn btn-success mb-4 w-100">Log in</button>
        </form>
      </div>
    );
  }
}

LogIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LogIn;
