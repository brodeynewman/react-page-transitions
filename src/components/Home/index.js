import _ from 'lodash';
import React from 'react';
import fp from 'lodash/fp';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import withTransition from '../withTransition';

class Home extends React.Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    activeTransition: PropTypes.shape(PropTypes.object).isRequired,
  }

  state = {};

  render() {
    const { activeTransition } = this.props;

    return (
      <CSSTransition
        in={Boolean(activeTransition)}
        classNames={_.get(activeTransition, 'className', '')}
        timeout={_.get(activeTransition, 'timeout', 300)}
        unmountOnExit={_.get(activeTransition, 'unmountOnExit', true)}
      >
        {() => activeTransition && ((
          <div className="container mx-auto text-center w-1/2 bg-white" style={{ height: 400 }}>
            <div className="h-full pl-10 pr-10 pt-20 w-full shadow bg-white rounded-sm">
              <p className="text-indigo-darker text-left">
                Lorem ipsum dolor sit amet,
                euripidis sadipscing ne eam, usu erant sensibus splendide ad.
                Vix numquam deserunt at, ut qui meis nostro temporibus.
                Ius ex debet maiorum honestatis,
                alii democritum ut eos, in sit errem quidam nominati.
                Nam possit praesent iracundia id.
                Brute dolorum consectetuer in ius, duo vidit dicant cu.
              </p>
            </div>
          </div>
        ))}
      </CSSTransition>
    );
  }
}

export default fp.compose(
  withTransition,
  withRouter,
)(Home);
