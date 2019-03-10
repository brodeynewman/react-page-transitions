import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export const TransitionContext = React.createContext({});

class TransitionProvider extends React.Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    children: PropTypes.node.isRequired,
  }

  state = {
    activeTransition: null,
  };

  componentDidMount() {
    const { history } = this.props;

    const matchingTransition = _.find(this.transitions, trans => (
      trans.path === history.location.pathname));

    if (matchingTransition) this.handlePushState(matchingTransition)();
  }

  get transitions() {
    return [
      {
        name: 'Fade in with opacity',
        path: '/fade-opacity',
        className: 'fadeInOpacity',
        onClick: this.handlePushState,
      },
      {
        name: 'Raise up',
        path: '/raise-up',
        className: 'raiseUp',
        onClick: this.handlePushState,
      },
      {
        name: 'Raise down',
        path: '/raise-down',
        className: 'raiseDown',
        onClick: this.handlePushState,
      },
      {
        name: 'Raise up with opacity',
        path: '/raise-up-opacity',
        className: 'raiseUpOpacity',
        onClick: this.handlePushState,
      },
      {
        name: 'Raise down with opacity',
        path: '/raise-down-opacity',
        className: 'raiseDownOpacity',
        onClick: this.handlePushState,
      },
      {
        name: 'Slide Right',
        path: '/slide-right',
        className: 'slideRight',
        onClick: this.handlePushState,
      },
      {
        name: 'Slide Left',
        path: '/slide-left',
        className: 'slideLeft',
        onClick: this.handlePushState,
      },
    ];
  }

  get actions() {
    return {
      handlePushState: this.handlePushState,
    };
  }

  handlePushState = activeTransition => () => {
    const { history } = this.props;

    this.setState({ activeTransition: null });

    setTimeout(() => {
      this.setState({ activeTransition });

      history.push(activeTransition.path);
    }, activeTransition.buffer || 300);
  }

  render() {
    const { children } = this.props;
    const { activeTransition } = this.state;

    return (
      <TransitionContext.Provider value={{
        transitions: this.transitions,
        actions: this.actions,
        activeTransition,
      }}
      >
        {children}
      </TransitionContext.Provider>
    );
  }
}

export default withRouter(TransitionProvider);
