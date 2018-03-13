import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appartment from './Appartment';
import { getPriceFloor } from '../selectors';
import './style.css';

class floor extends Component {
  render() {
    const { numero, price, listAppartments} = this.props
    const appartments = listAppartments.map((el, index) => <Appartment key={index} {...el}/>)

    return (
      <div className="floor">
        <div className="floorNumberBox">
          <span>Etage {numero+1}</span>
          <span style={{height:'40px'}}>Total: {price}L</span>
        </div>
        {appartments}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listAppartments: state.floors[props.id].listeAppartment,
  price: getPriceFloor(state, props.id)
})

const mapDispatchToProps = {
}

const Floor = connect(
  mapStateToProps,
  mapDispatchToProps
)(floor)

export default Floor;
