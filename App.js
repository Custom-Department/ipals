import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppTwo from './AppTwo';
import {persistor, store} from './src/Redux/Reducer';
import FlashMessage from 'react-native-flash-message';
import { MenteeDtailedScreen } from './src/screens/ManteeScreens/ManteeDetailtedScreen/MenteeDetailedScreen';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <AppTwo /> */}
        <MenteeDtailedScreen/>
      </PersistGate>
      <FlashMessage position="top" />
    </Provider>
  );
}

export default App;
