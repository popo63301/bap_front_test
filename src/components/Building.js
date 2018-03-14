import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPriceBuilding } from '../selectors'
import Floor from './Floor';
import './style.css';

class building extends Component {
  render() {
    const { listFloors, numero, price } = this.props
    const floors = listFloors.map((el, index) => <Floor key={index} numero={index} id={el}/>)

    return (
      <div className="building">
        {floors}
        <div className="buildingBox">
          <span>Bâtiment {numero}</span>
          <span>Total: 🚰 {price}L</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listFloors: state.buildings[props.numero].listFloors,
  price: getPriceBuilding(state, props.numero)
})

const Building = connect(
  mapStateToProps,
  null
)(building)

export default Building;
