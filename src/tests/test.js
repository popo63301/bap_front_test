import { getPriceResidence } from '../selectors'
import pricesReducer from '../reducers/prices'
import uiReducer from '../reducers/ui'

const mock = {
  prices: {
    small: 3,
    big: 9,
    jacuzzi: 19
  },
  floors: {
    1: {
      listeAppartment: [{
        numero: 1,
        type: 'small'
      },
      {
        numero: 2,
        type: 'big'
      }]
    },
    2: {
      listeAppartment: [{
        numero: 1,
        type: 'small'
      },
      {
        numero: 2,
        type: 'small'
      }]
    },
    3: {
      listeAppartment: [{
        numero: 1,
        type: 'big'
      },
      {
        numero: 2,
        type: 'big'
      },
      {
        numero: 3,
        type: 'small'
      }]
    },
    4: {
      listeAppartment: [{
        numero: 1,
        type: 'jacuzzi'
      },
      {
        numero: 2,
        type: 'big'
      },
      {
        numero: 3,
        type: 'small'
      }]
    },
    5: {
      listeAppartment: [{
        numero: 1,
        type: 'jacuzzi'
      }]
    },
    6: {
      listeAppartment: [{
        numero: 1,
        type: 'small'
      }]
    },
  },
  buildings: {
    A: {
      listFloors: [1,2]
    },
    B: {
      listFloors: [3]
    },
    C: {
      listFloors: [4]
    },
    D: {
      listFloors: [5, 6]
    }
  },
  ui: {
    jacuzzi: false,
    time: 0,
    clockWorking: false
  }
}

test('Test total cost residence with selector', () => {
  let value = getPriceResidence(mock);

  expect(value).toEqual(92)
});

test('Test increase time', () => {

  let value = uiReducer(mock.ui, {type: 'INCREASE_TIME'});

  expect(value).toEqual({
    jacuzzi: false,
    time: 1,
    clockWorking: false
  })
});

test('Test increase time', () => {

  let value = pricesReducer(mock.prices, {type: 'INCREASE_TIME'});

  expect(value).toEqual({
    small: 6,
    big: 18,
    jacuzzi: 38
  })
});
