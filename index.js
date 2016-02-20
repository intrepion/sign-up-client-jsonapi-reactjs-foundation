import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import reducers from './reducers';
import App from './containers/App';
import Index from './components/App/Index';
import Privacy from './components/App/Privacy';
import ResetPassword from './components/App/ResetPassword';
import SignIn from './components/App/SignIn';
import SignUp from './components/App/SignUp';
import Terms from './components/App/Terms';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="privacy" component={Privacy} />
        <Route path="reset-password" component={ResetPassword} />
        <Route path="sign-in" component={SignIn} />
        <Route path="sign-up" component={SignUp} />
        <Route path="terms" component={Terms} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
