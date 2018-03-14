import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseTime, decreaseTime, resetTime, toggleClock } from '../actions';
import './style.css';

class clock extends Component {
  constructor(props){
    super(props)

    this.timerID;
    this.startClock = this.startClock.bind(this)
    this.stopClock = this.stopClock.bind(this)
    this.resetClock = this.resetClock.bind(this)
    this.toggleClock = this.toggleClock.bind(this)
    this.decreaseTimeManual = this.decreaseTimeManual.bind(this)
  }

  componentWillUnmount() {
    this.stopClock()
  }

  startClock() {
    const { increaseTime } = this.props;

    this.timerID = setInterval(
      () => {
        increaseTime()
      },
      4000
    );
  }

  stopClock() {
    clearInterval(this.timerID);
  }

  resetClock() {
    clearInterval(this.timerID);
    this.props.resetTime()
    this.startClock()
  }

  decreaseTimeManual(){
    const { minutes, decreaseTime } = this.props

    if (minutes>0) {
      decreaseTime()
    }
  }

  toggleClock() {
    const { clockWorking, toggleClock } = this.props

    if (clockWorking) {
      this.stopClock()
    } else {
      this.startClock()
    }

    toggleClock()
  }

  render() {
    const { minutes, increaseTime, clockWorking } = this.props

    return (
      <div style={{fontSize:'40px'}}>
        {minutes} minute{minutes>1 && 's'} passée{minutes>1 && 's'}<br/>
        <div>
          <span onClick={this.toggleClock}>{clockWorking? '⏸' : '▶️'}</span>
          <span onClick={this.resetClock}>⏹</span>
        </div>
        <button onClick={() => increaseTime()}>Augmenter d'1 min</button><br/>
        <button onClick={this.decreaseTimeManual}>Baisser d'1 min</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  minutes: state.ui.time,
  clockWorking: state.ui.clockWorking
})

const mapDispatchToProps = {
  increaseTime,
  decreaseTime,
  toggleClock,
  resetTime
}

const Clock = connect(
  mapStateToProps,
  mapDispatchToProps
)(clock)

export default Clock;
