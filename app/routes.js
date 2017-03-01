import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Login} />
		<Route path="/about" component={About} />
	</Route>
);
