import {createStore,applyMiddleware,compose} from 'redux';
import contactsReducer from './../reducers/contactsReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( contactsReducer, composeEnhancers(applyMiddleware(thunk)))