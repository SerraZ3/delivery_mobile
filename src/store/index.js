// Config do redux
import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux';

import createSagaMiddleware from 'redux-saga';

// Config para persistencia de dados com o redux
import {persistStore} from 'redux-persist';

// Logger para o redux
import {createLogger} from 'redux-logger';

import reducer from './reducer';
// Array que conterá todos os middlewares
const middlewares = [];

// Cria middleware para o saga
// const sagaMiddleware = createSagaMiddleware();

// Logger para redux
const logger = createLogger({});

middlewares.push(logger);

// Criar o store com os reducers
const store = createStore(reducer, applyMiddleware(...middlewares));

// Criar o persistor com a store
const persistor = persistStore(store);

export {store, persistor};
