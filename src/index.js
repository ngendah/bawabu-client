import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';

const App = () => {
  return (<div>
    <h3>Bawabu client</h3>
  </div>);
};

ReactDom.render(<App/>, document.getElementById('root'));
