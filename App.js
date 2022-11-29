import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppTwo from './AppTwo';
import {persistor, store} from './src/Redux/Reducer';
import FlashMessage from 'react-native-flash-message';
import MentorPaymentCardScreen from './src/screens/MentorScreens/MentorPaymentCardScreen/MentorPaymentCardScreen';

function App() {
  return (
    <Provider store={store}>
        {/* <MentorPaymentCardScreen/> */}
       <PersistGate persistor={persistor} loading={null}>
        <AppTwo /> 
      </PersistGate>
     
      <FlashMessage position="top" />
    </Provider>
  );
}

export default App;
