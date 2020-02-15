import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './js/components/App';
import Empdashboard from "./js/components/Empdashboard";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/dashboard" component={Empdashboard} />
    </Route>
);