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

  get transitions() {
    return [
      {
        name: 'Fade in with opacity',
        onClick: this.handlePushState('/fade-opacity'),
        className: 'fadeInOpacity',
      },
      {
        name: 'Raise up',
        onClick: this.handlePushState('/raise-up'),
        className: 'raiseUp',
      },
      {
        name: 'Raise down',
        onClick: this.handlePushState('/raise-down'),
        className: 'raiseDown',
      },
      {
        name: 'Raise up with opacity',
        onClick: this.handlePushState('/raise-up-opacity'),
        className: 'raiseUpOpacity',
      },
      {
        name: 'Raise down with opacity',
        onClick: this.handlePushState('/raise-down-opacity'),
        className: 'raiseDownOpacity',
      },
    ];
  }

  get actions() {
    return {
      handlePushState: this.handlePushState,
    };
  }

  handlePushState = path => activeTransition => () => {
    const { history } = this.props;

    this.setState({ activeTransition: null });

    setTimeout(() => {
      this.setState({ activeTransition });

      history.push(path);
    }, activeTransition.buffer || 300);
  }

  render() {
    const { children } = this.props;
    const { activeTransition } = this.state;

    console.log(activeTransition);

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
