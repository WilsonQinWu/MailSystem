import React, { useState } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './Routes';
import { SplashScreen } from './app/Layout';


function App({ store, persistor }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<SplashScreen />}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
