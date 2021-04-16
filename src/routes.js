import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import HomeScreen from './components/HomeScreen';
import SelectScreen from './components/SelectScreen';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeScreen} />
    <Route path="/select" component={SelectScreen} />
  </Route>
);