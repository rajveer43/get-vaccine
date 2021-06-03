import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {};

const store = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store;