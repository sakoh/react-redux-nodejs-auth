import React, { Component } from 'react';

export default class Alert extends Component {
  render() {
    const { message, status } = this.props.alert;

    <div className={`alert alert-${status}`}>
      {message}
    </div>
  }
}
