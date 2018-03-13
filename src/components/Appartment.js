import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class appartment extends Component {
  render() {
    const { numero, type } = this.props

    return (
      <div className="appartmentBox">
        🏠Appartement n°{numero} ({type==='small' ? 'petit' : type==='big' ? 'grand' : 'jacuzzi'})
        <br/>

        <span className="appartmentWaterPrice">🚰 40L</span>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

const Appartment = connect(
  mapStateToProps,
  mapDispatchToProps
)(appartment)

export default Appartment;
