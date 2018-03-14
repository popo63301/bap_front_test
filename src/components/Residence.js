import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPriceResidence } from '../selectors'
import Building from './Building';
import Floor from './Floor';
import Clock from './Clock';
import './style.css';

class residence extends Component {
  render() {
    const { buildings, price } = this.props

    return (
      <div>
        <div className="title">BAP Water 👪💧</div>
        <Clock/>
        <div className="residenceTotal">
          Résidence total: {price} L
        </div>
        <div className="buildingContainer">
          <Building numero="A"/>
          <Building numero="B"/>
          <Building numero="C"/>
          <Building numero="D"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  price: getPriceResidence(state)
})

const Residence = connect(
  mapStateToProps,
  null
)(residence)

export default Residence;
