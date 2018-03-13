const initialState = {}

export function pricesReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_PRICE':
      return {
        small: state.small + 3,
        big: state.big + 9,
        jacuzzi: state.jacuzzi + 19
      }
    default:
        return state
  }
}

export default pricesReducer
