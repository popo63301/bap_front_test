const initialState = {}

export function pricesReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_TIME':
      return {
        small: state.small + 3,
        big: state.big + 9,
        jacuzzi: state.jacuzzi + 19
      }
    case 'DECREASE_TIME':
      return {
        small: state.small - 3,
        big: state.big - 9,
        jacuzzi: state.jacuzzi - 19
      }
    case 'RESET_TIME':
      return {
        small: 3,
        big: 9,
        jacuzzi: 19
      }
    default:
        return state
  }
}

export default pricesReducer
