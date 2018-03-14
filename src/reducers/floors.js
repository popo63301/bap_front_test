const initialState = {}

export function floorsReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_JACUZZI':
      const newList = state[10].listeAppartment.slice(0);
      newList[0] = {
        numero: 1,
        type: newList[0].type === 'jacuzzi' ? 'big' : 'jacuzzi'
      }

      return {
        ...state,
        10: {
          listeAppartment: newList
        }
      }
    default:
        return state
  }
}

export default floorsReducer
