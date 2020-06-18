import React from 'react';
import Session from './routes/SessionStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Session />
      </PersistGate>
    </Provider>
  );
};

export default App;
