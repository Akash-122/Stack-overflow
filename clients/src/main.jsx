import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider} from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import Reducers from './Reducers';

const store = legacy_createStore(Reducers , compose(applyMiddleware(thunk)));


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
