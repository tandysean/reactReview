import React, { Component } from 'react'

export default class ActionButton extends Component {

  render () {
    return (
      <button className="button main-action" onClick={this.props.handleClickAction}>
        { this.props.actionLabel}
      </button>
      );
  }
}
