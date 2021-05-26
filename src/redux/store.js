// 1
// import { createStore } from 'redux'
// import subscribersReducer from './subscribers/reducer'
// const store = createStore(subscribersReducer)

// 2
// import { createStore } from 'redux'
// import rootReducer from './rootReducer'
// const store = createStore(rootReducer)

// 3
// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// const middlewares = [logger]
// const store = createStore(rootReducer, applyMiddleware(...middleware))

// 4_1 (Windows)
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
const middlewares = [logger]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
