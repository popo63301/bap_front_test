import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class appartment extends Component {
  render() {
    const { numero, type, conso } = this.props

    return (
      <div
        className="appartmentBox"
        style={{backgroundColor: type==='jacuzzi' && '#3D9970'}}
      >
        🏠Appartement n°{numero} ({type==='small' ? 'petit' : type==='big' ? 'grand' : 'jacuzzi'})
        <br/>

        <span className="appartmentWaterPrice">🚰 {conso}L</span>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  conso: state.prices[props.type]
})

const mapDispatchToProps = {
}

const Appartment = connect(
  mapStateToProps,
  mapDispatchToProps
)(appartment)

export default Appartment;
