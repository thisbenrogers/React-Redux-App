import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { lyricsReducer } from './reducers';

import App from './App';

import './index.css';

const store = createStore(lyricsReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
