/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import LogIn from '~/components/LogIn';

import 'bootstrap/scss/bootstrap.scss';


const App = () => (
  <div className="container">
    <LogIn />
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
