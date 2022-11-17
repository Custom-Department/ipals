import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppTwo from './AppTwo';
import {persistor, store} from './src/Redux/Reducer';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenteebottomTabs from './src/navigations/bottomnavigationMentee'
const Stack = createNativeStackNavigator();


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppTwo />
      </PersistGate>
      <FlashMessage position="top" />
    </Provider>
  );
}

export default App;
