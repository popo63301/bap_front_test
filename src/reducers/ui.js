const initialState = {}

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_JACUZZI':
      return {
        ...state,
        jacuzzi: !state.jacuzzi
      }
    case 'INCREASE_TIME':
      return {
        ...state,
        time: state.time + 1
      }
    case 'DECREASE_TIME':
      return {
        ...state,
        time: state.time - 1
      }
    case 'RESET_TIME':
      return {
        ...state,
        time: 0,
        clockWorking: true
      }
    case 'TOGGLE_CLOCK':
      return {
        ...state,
        clockWorking: !state.clockWorking
      }
    default:
        return state
  }
}

export default uiReducer
