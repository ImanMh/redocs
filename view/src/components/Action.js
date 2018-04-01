import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Action extends Component {
  static propTypes = {
    type: PropTypes.string,
    samplePayload: PropTypes.shape(),
  };

  render () {
    const { type, samplePayload } = this.props;
    return (
      <div>
        <strong>{type}</strong>
        <pre>
          <code>
            {JSON.stringify(samplePayload, null, 2)}
          </code>
        </pre>
      </div>
    )
  }
}

export default Action;
