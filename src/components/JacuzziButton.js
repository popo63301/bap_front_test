import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleJacuzzi } from '../actions'
import './style.css';

class jacuzziButton extends Component {
  render() {
    const { hasJacuzzi, toggleJacuzzi } = this.props

    return (
      <div>
        <button
          onClick={toggleJacuzzi}
        >
          {hasJacuzzi ? 'Désactiver le Jacuzzi' : 'Activer le Jacuzzi'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  hasJacuzzi: state.ui.jacuzzi
})

const mapDispatchToProps = {
  toggleJacuzzi
}

const JacuzziButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(jacuzziButton)

export default JacuzziButton;
