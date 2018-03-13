import { combineReducers } from 'redux'
import prices from './prices'
import floors from './floors'
import buildings from './buildings'


const appStore = combineReducers({
  prices,
  floors,
  buildings
})

export default appStore
