import React, { Component } from 'react';
import Floor from './Floor';
import Building from './Building';
import './style.css';

class Residence extends Component {
  render() {
    return (
      <div>
        <div>
          Résidence total: 4000 L
        </div>
        <div>
          <Building/>
          <Building/>
          <Building/>
        </div>
      </div>
    );
  }
}

export default Residence;
