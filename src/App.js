import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from './reducers';
import Residence from './components/Residence';
import mock from './helpers/initValuesReducers';

let store = createStore(appStore, mock)

console.log(store.getState())

// store.subscribe(() => {
//   let store1 = store.getState()
//   console.log('pokemon')
//   // console.log(store1.recipes.byId)
//
// });


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Residence />
      </Provider>
    );
  }
}

export default App;
