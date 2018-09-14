import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleRenderProps extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    const { on } = this.state;
    this.setState({
      on: !on,
    });
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;
    return children({
      on,
      toggle: this.toggle,
    });
  }
}

ToggleRenderProps.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ToggleRenderProps;
