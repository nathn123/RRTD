import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/store';
import { Provider } from 'react-redux';
import MapContainer from './components/mapContainer';

const store = createStore(rootReducer, composeWithDevTools());

    ReactDOM.render(
        <Provider store={store}>
            <h1>TEST REACT</h1>
            <MapContainer src={'type'}/>
        </Provider>,
        document.getElementById('root'));
