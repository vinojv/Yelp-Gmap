import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import App from './Containers/App/App';
import './index.css';
import reducer from './Reducers';
import sagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagas.forEach(saga => sagaMiddleware.run(saga));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
