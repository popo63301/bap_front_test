import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPriceResidence } from '../selectors'
import Building from './Building';
import Floor from './Floor';
import Clock from './Clock';
import JacuzziButton from './JacuzziButton';
import './style.css';

class residence extends Component {
  render() {
    const { buildings, price } = this.props

    return (
      <div>
        <div style={{
          fontSize: '30px',
          textAlign: 'center',
          fontFamily: 'Roboto',
          color: '#0074D9'
        }}>BAP Water 👪💧 </div>
        <Clock/>
        <JacuzziButton />
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
