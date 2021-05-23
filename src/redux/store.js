// 1
// import { createStore } from 'redux'
// import subscribersReducer from './subscribers/reducer'
// const store = createStore(subscribersReducer)

// 2
import { createStore } from 'redux'
import rootReducer from './rootReducer'
const store = createStore(rootReducer)

// 3
// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// const middlewares = [logger]
// const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store