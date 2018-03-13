import React, { Component } from 'react';
import { connect } from 'react-redux';
import Building from './Building';
import Floor from './Floor';
import './style.css';

class residence extends Component {
  render() {
    const { buildings } = this.props

    return (
      <div>
        <div>
          Résidence total: 4000 L
        </div>
        <div>
          <Building numero="A"/>
          <Building numero="B"/>
          <Building numero="C"/>
          <Building numero="D"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

const Residence = connect(
  mapStateToProps,
  mapDispatchToProps
)(residence)

export default Residence;
