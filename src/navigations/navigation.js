import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import {Tutor} from '../screens/TutorScreens';
import {Tutee} from '../screens/TuteeScreen';
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
        <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
        <Stack.Screen name="OnboardScreen" component={screens.OnboardScreen} />
        <Stack.Screen name="CreateAccount" component={screens.CreateAccount} />
        <Stack.Screen name="Profile" component={screens.Profile} />
        <Stack.Screen name="Home" component={screens.Home} />
        <Stack.Screen name="Category" component={screens.Category} />
        <Stack.Screen
          name="DashboardScreen"
          component={Tutor.DashboardScreen}
        />
        <Stack.Screen
          name="TuteeDashboardScreen"
          component={Tutee.TuteeDashboardScreen}
        />
      </Stack.Navigator>
    </>
  );
}
