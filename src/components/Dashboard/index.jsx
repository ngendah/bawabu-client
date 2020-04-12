import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <nav className="navbar">
          <span className="navbar-brand">Bawabu</span>
        </nav>
        <section className="container d-flex flex-column">
          <div class="col-lg-3">
            <p className="menu-label"> OAuth2 </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">User credentials</li>
              <li className="list-group-item">Authorization code</li>
              <li className="list-group-item">Client credentials</li>
              <li className="list-group-item">Implicit</li>
            </ul>
          </div>
          <div className="dashboard__content is-flex flex-col"></div>
        </section>
      </div>
    );
  }
}

Dashboard.PropTypes ={
  user: PropTypes.object,
};

export default Dashboard;
