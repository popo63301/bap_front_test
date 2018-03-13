export const getPriceAppartment = (state, type) => {
  return state.prices[type]
}

export const getPriceFloor = (state, id) => {
  const reducer = (accumulator, currentValue) => accumulator + getPriceAppartment(state, currentValue.type);

  return state.floors[id].listeAppartment.reduce(reducer, 0)
}

export const getPriceBuilding = (state, numero) => {
  const reducer = (accumulator, currentValue) => accumulator + getPriceFloor(state, currentValue);

  return state.buildings[numero].listFloors.reduce(reducer, 0)
}

export const getPriceResidence = (state) => {
  const listBuildings = ['A','B','C','D']
  const reducer = (accumulator, currentValue) => accumulator + getPriceBuilding(state, currentValue);

  return listBuildings.reduce(reducer, 0)
}
