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
        <Clock/>
        <div>
          Résidence total: {price} L
        </div>
        <div>
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

const mapDispatchToProps = {
}

const Residence = connect(
  mapStateToProps,
  mapDispatchToProps
)(residence)

export default Residence;
