import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import reducers from './reducer';

const loggerMiddleware = createLogger();

const middlewareArr = [loggerMiddleware];
const middleware = applyMiddleware(...middlewareArr);

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store);
  return { store, persistor };
};
