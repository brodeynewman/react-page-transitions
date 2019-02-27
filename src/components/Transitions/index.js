import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import withTransition from '../withTransition';

class Transitions extends React.Component {
  static propTypes = {
    transitions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      onClick: PropTypes.func,
    })).isRequired,
  }

  state = {};

  render() {
    const { transitions } = this.props;

    return (
      <div className="bg-transparent mb-20 mt-10 flex justify-center m-auto flex-wrap" style={{ maxWidth: 600 }}>
        {_.map(transitions, transition => (
          <button
            className="bg-white pt-3 pb-3 pr-6 pl-6 shadow rounded-sm bg-teal-dark text-white mt-5 ml-5 mr-5"
            type="button"
            onClick={transition.onClick(transition)}
          >
            {transition.name}
          </button>
        ))}
      </div>
    );
  }
}

export default withTransition(Transitions);
