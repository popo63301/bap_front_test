import React, { Component } from 'react';
import { connect } from 'react-redux';
import Floor from './Floor';
import './style.css';

class building extends Component {
  render() {
    const { listFloors } = this.props
    const floors = listFloors.map((el, index) => <Floor key={index} numero={index} id={el}/>)

    return (
      <div className="building">
        {floors}
        <div className="buildingBox">
          <span>Bâtiment A</span>
          <span>Total: 🚰 40L</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listFloors: state.buildings[props.numero].listFloors
})

const mapDispatchToProps = {
}

const Building = connect(
  mapStateToProps,
  mapDispatchToProps
)(building)

export default Building;
