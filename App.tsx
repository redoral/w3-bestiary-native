import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from './src/redux/reducer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/Main';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof reducer>;

// sagaMiddleWare.run()

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar style='light' />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Main' component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
