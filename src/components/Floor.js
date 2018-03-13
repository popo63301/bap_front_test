import React, { Component } from 'react';
import Appartment from './Appartment';
import './style.css';

class Floor extends Component {
  render() {
    return (
      <div className="floor">
        <div className="floorNumberBox">
          <span>Etage 2</span>
          <span style={{height:'40px'}}>Total: 160L</span>
        </div>
        <Appartment/>
        <Appartment/>
        <Appartment/>
        <Appartment/>
        <Appartment/>
      </div>
    );
  }
}

export default Floor;
