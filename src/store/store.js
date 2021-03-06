import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import thunk from 'redux-thunk';
import { transactionReducer } from '../reducers/transactionReducer';
import { balanceReducer } from '../reducers/balanceReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Combinacion de los reducers a utilizar
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    transaction: transactionReducer,
    balance: balanceReducer
});

//El createStore solo puede recibir un reducer, por lo que vamos a pasarle el reducer combinado
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)))