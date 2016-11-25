import React from 'react';
import { render } from 'react-dom';

// Import css
import './styles/style.styl';
import App from './components/App';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
    tags: {
        git_commit: 'something',
        userLevel: 'editor'
    }
}).install();

Raven.captureMessage('Something bad happened');
Raven.showReportDialog();


console.log(store.doesNot.nope());

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>

);

render(router, document.getElementById('root'));