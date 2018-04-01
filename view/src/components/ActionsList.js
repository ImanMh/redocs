import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Action from './Action';

class ActionsList extends Component {

  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape()),
  };

  render () {
    const { actions } = this.props;

    return (
      <div>
        {actions.map((action) => (
          <Action
            type={action.type}
            samplePayload={action.samplePayload}
          />
        ))}
      </div>
    )
  }
}

export default ActionsList;
