import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

// import logger from 'redux-logger';
import { rootSaga } from './RootSaga';

import { rootReducer } from './RootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  // process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined, 
  composedEnhancers
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);