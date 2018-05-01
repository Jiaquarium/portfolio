import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

(function init() {
    hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
})();

// registerServiceWorker();
