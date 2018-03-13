import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPrice } from '../actions';
import './style.css';

class clock extends Component {
  constructor(props){
    super(props)
    this.state = {
      minutes: 0
    }

    this.timerID;
    this.handleClock = this.handleClock.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClock() {
    const { newPrice } = this.props;

    this.timerID = setInterval(
      () => {
        this.setState({minutes: this.state.minutes + 1})
        newPrice()
      },
      4000
    );
  }

  render() {
    return (
      <div style={{fontSize:'40px'}}>
        {this.state.minutes}
        <button onClick={this.handleClock}>click</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
  newPrice
}

const Clock = connect(
  mapStateToProps,
  mapDispatchToProps
)(clock)

export default Clock;
