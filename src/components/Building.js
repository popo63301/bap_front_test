import React, { Component } from 'react';
import Floor from './Floor';
import './style.css';

class Building extends Component {
  render() {
    return (
      <div className="building">
        <Floor/>
        <Floor/>
        <Floor/>
        <div className="buildingBox">
          <span>Bâtiment A</span>
          <span>Total: 🚰 40L</span>
        </div>
      </div>
    );
  }
}

export default Building;
