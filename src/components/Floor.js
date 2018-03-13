import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appartment from './Appartment';
import './style.css';

class floor extends Component {
  render() {
    const { numero, listAppartments} = this.props
    const appartments = listAppartments.map((el, index) => <Appartment key={index} {...el}/>)
    
    return (
      <div className="floor">
        <div className="floorNumberBox">
          <span>Etage {numero+1}</span>
          <span style={{height:'40px'}}>Total: 160L</span>
        </div>
        {appartments}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listAppartments: state.floors[props.id].listeAppartment
})

const mapDispatchToProps = {
}

const Floor = connect(
  mapStateToProps,
  mapDispatchToProps
)(floor)

export default Floor;
