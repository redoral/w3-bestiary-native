import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllMonstersScreen from './AllMonsters';
import CategoriesScreen from './Categories';

const Drawer = createDrawerNavigator();

const MainScreen: React.FC = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='All' component={AllMonstersScreen} />
      <Drawer.Screen name='Categories' component={CategoriesScreen} />
    </Drawer.Navigator>
  );
};

export default MainScreen;
