import { combineReducers } from 'redux'
import prices from './prices'
import floors from './floors'
import buildings from './buildings'
import ui from './ui'


const appStore = combineReducers({
  prices,
  floors,
  buildings,
  ui
})

export default appStore
