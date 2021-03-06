import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeThunk = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, composeThunk)

export default store
