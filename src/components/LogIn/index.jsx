import React from 'react';
import './styles.scss';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
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
  }

  render() {
    return (
      <div className="d-flex justify-content-end">
        <form
          onSubmit={this.handleSubmit}
          className="d-flex flex-column align-items-center login"
        >
          <div className="form-group">
            <label htmlFor="user">User</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              name="user"
              placeholder="user"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">LogIn</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
