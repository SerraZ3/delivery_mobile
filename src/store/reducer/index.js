import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// Para armazenamento dos dados no celular
import AsyncStorage from '@react-native-community/async-storage';

import user from './user';
import order from './order';

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

const allReducer = combineReducers({
  user: persistReducer(userPersistConfig, user),
  order: order,
});

export default allReducer;
