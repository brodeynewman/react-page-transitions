import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import withTransition from '../withTransition';

const styles = {
  hovered: {
    backgroundColor: '#f1f5f8',
    transition: 'all .2s ease',
  },
};

class Transitions extends React.Component {
  static propTypes = {
    transitions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      onClick: PropTypes.func,
    })).isRequired,
  }

  state = {
    hoveredIndex: null,
  };

  handleHoverToggle = hoveredIndex => () => this.setState({
    hoveredIndex,
  });

  handleMouseLeave = () => this.setState({
    hoveredIndex: null,
  });

  render() {
    const { transitions } = this.props;
    const { hoveredIndex } = this.state;

    return (
      <div className="bg-transparent" style={{ maxWidth: 600 }}>
        <h2 className="border-b border-grey-light rounded pt-5 pb-5 pl-6 font-bold text-blue-darker">
          <NavLink to="/" className="no-underline text-blue-darker">
            Transitions
          </NavLink>
        </h2>
        <div>
          {_.map(transitions, (transition, index) => (
            /* eslint-disable-next-line */
            <NavLink
              key={transition.path}
              to={transition.path}
              activeStyle={styles.hovered}
              style={hoveredIndex === index ? styles.hovered : {}}
              onFocus={this.handleHoverToggle(index)}
              onMouseOver={this.handleHoverToggle(index)}
              onMouseLeave={this.handleMouseLeave}
              className="block w-full bg-white pt-6 pb-6 pr-6 pl-6 rounded-sm no-underline text-left text-blue-darker font-medium"
              onClick={transition.onClick(transition)}
            >
              {transition.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default withTransition(Transitions);
