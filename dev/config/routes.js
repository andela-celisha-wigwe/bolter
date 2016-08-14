import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App';
import VideosContainer from '../containers/VideosContainer';
import SearchContainer from '../containers/SearchContainer';
import store, { history } from '../store';

import { Provider } from 'react-redux';

const routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={VideosContainer} />
				<Route path="/videos(/:query)" component={SearchContainer}></Route>
			</Route>
		</Router>
	</Provider>
)

module.exports = routes;