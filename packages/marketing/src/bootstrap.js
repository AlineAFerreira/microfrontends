import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const Mount = element => {
    ReactDOM.render(<App />, element);
}

// If development and in isolation call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('marketingRoot')

    if (devRoot) Mount(devRoot);
}

//If running through container we should export the app
export { Mount };