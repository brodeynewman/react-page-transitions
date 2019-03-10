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
    activeTransition: PropTypes.shape({}),
  }

  static defaultProps = {
    activeTransition: {},
  }

  state = {};

  render() {
    const { activeTransition } = this.props;

    return (
      <CSSTransition
        in={Boolean(activeTransition)}
        classNames={_.get(activeTransition, 'className', '')}
        timeout={_.get(activeTransition, 'timeout', 300)}
        transitionLeaveTimeout={300}
      >
        {() => activeTransition && ((
          <div className="container mx-auto text-center w-3/4 bg-white" style={{ height: 600 }}>
            <div className="h-full pl-10 pr-10 pt-20 w-full shadow bg-white rounded-sm border-grey-light border" />
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
