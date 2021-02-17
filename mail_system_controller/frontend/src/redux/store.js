import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer, rootSaga } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;