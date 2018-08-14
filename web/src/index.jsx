// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import combineReducers from "./reducers";

import registerServiceWorker from './registerServiceWorker';

// Components and Styles
import App from './components/app';
import './styles/app.scss';

const store = createStore(combineReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	//<Provider store={store}> <App/> </Provider>,
	<Provider store={store}><App/></Provider>,
	document.getElementById('root')
);

registerServiceWorker();