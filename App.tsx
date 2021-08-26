import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './src/redux/reducer';
import { Text } from 'react-native';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

export type RootStore = ReturnType<typeof reducer>;

// sagaMiddleWare.run()

export default function App() {
  return (
    <Provider store={store}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Provider>
  );
}
