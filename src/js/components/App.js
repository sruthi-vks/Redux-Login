import React from "react";

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

/* import List from "./List";
import MovieLists from "./MovieLists";
import Form from "./Form";
import Collection from "./ListJson" */

import Login from "./login";
import Empdashboard from "./Empdashboard";
import history from './history';

//import { List, MovieLists } from './List';
const App = () => (
  <>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Empdashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;