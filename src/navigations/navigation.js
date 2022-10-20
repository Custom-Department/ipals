

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../screens';
const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>

        {/* <Stack.Screen name="MybottomTabs" component={MybottomTabs} /> */}
        <Stack.Screen
          name="LoginScreen"
          component={screens.LoginScreen}
        />
        <Stack.Screen
          name="Profile"
          component={screens.Profile}
        />
        <Stack.Screen
          name="Home"
          component={screens.Home}
        />
        <Stack.Screen
          name="Category"
          component={screens.Category}
        />
      </Stack.Navigator>
    </>
  );
}