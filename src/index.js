import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { UserProviderConnector } from './views/user/user-provider-connector';
import { WelcomeScreenConnector } from './views/welcome-screen/welcome-screen-connector';

// This sets up the Redux DevTools in the Chrome Browser
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <UserProviderConnector>
          <WelcomeScreenConnector/>
        </UserProviderConnector>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
