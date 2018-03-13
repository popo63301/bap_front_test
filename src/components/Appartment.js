import React, { Component } from 'react';
import './style.css';

class Appartment extends Component {
  render() {
    return (
      <div className="appartmentBox">
        🏠Appartement n°1 (petit)
        <br/>

        <span className="appartmentWaterPrice">🚰 40L</span>
      </div>
    );
  }
}

export default Appartment;
