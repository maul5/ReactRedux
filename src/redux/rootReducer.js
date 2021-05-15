import { combineReducers } from 'redux'
import subscribersReducer from './subscribers/reducer'
import viewReducer from './views/reducer'

const rootReducer = combineReducers({
  view: viewReducer,
  subscriber: subscribersReducer
})

export default rootReducer