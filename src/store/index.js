// Config do redux
import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux';

import createSagaMiddleware from 'redux-saga';

// Config para persistencia de dados com o redux
import {persistStore, persistReducer} from 'redux-persist';

// Para armazenamento dos dados no celular
import AsyncStorage from '@react-native-community/async-storage';

// Logger para o redux
import {createLogger} from 'redux-logger';

import user from './reducer/user';

// Array que conterá todos os middlewares
const middlewares = [];

// Cria middleware para o saga
const sagaMiddleware = createSagaMiddleware();

// Logger para redux
const logger = createLogger({});

// Cria uma config com chave para a persistencia de dados
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
};

// Cria uma config com chave para a persistencia de dados
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  timeout: null,
};

// Combina todos os reducers
const allReducers = combineReducers({
  user: persistReducer(userPersistConfig, user),
});

middlewares.push(logger);

const store = createStore(
  persistReducer(userPersistConfig, user),
  applyMiddleware(...middlewares),
);

const persistor = persistStore(store);

export {store, persistor};
