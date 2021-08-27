import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from './src/redux/reducer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import MonsterScreen from './src/screens/Monster';
import AllMonstersScreen from './src/screens/AllMonsters';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof reducer>;

// sagaMiddleWare.run()

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar style='light' />
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen
            name='Main'
            component={AllMonstersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Monster'
            component={MonsterScreen}
            options={{
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
