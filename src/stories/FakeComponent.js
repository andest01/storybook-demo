import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Fake.css';

class FakeComponent extends Component {
  render() {
    return <div className={'container'} >{this.props.myTextHere}</div>
  }
}

FakeComponent.propTypes = {
  myTextHere: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

export default FakeComponent;