import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './storage/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import App from './components/app/App';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

// const qwe = () => storage.removeItem('persist:root_ideas');
// qwe()  //очистка sorage;

let persistor = persistStore(store);



root.render(  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
); 
