import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './App.css';
import Router from './Router';
import Transitions from './components/Transitions';

class App extends React.Component {
  state = {};

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  render() {
    return (
      <div className="flex min-h-screen font-sans bg-grey-lighter justify-center">
        <div>
          <Transitions />
          <Router />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
