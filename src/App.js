import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from './reducers';
import Residence from './components/Residence';
import mock from './helpers/initValuesReducers';

let store = createStore(appStore, mock)

console.log(store.getState())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Residence />
        </div>
      </Provider>
    );
  }
}

export default App;
