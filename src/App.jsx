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
      <div className="flex min-h-screen font-sans bg-grey-lighter">
        <div className="bg-white shadow bg-white rounded-sm border-grey-light border" style={{ maxWidth: 400, width: 400 }}>
          <Transitions />
        </div>
        <div className="flex justify-center items-center" style={{ maxWidth: 800, width: 800 }}>
          <Router />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
