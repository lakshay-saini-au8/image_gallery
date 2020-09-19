import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
