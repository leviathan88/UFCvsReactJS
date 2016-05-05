import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './components/Main';
import EventAppContainer from './components/ListEvents/EventAppContainer';
import FightersAppContainer from './components/SearchFighters/FightersAppContainer';
import FightApp from './components/DnDFights/FightsApp';
import FighterDetails from './components/SearchFighters/FighterDetails';
import ServerError from './components/SearchFighters/ServerError';

// Render the main component into the dom
ReactDOM.render(
  <Router history={createBrowserHistory()}>
     <Route path="/" component={App}>
       <IndexRoute component={EventAppContainer}/>
       <Route path="fights" component={FightApp}/>
       <Route path="fighters" component={FightersAppContainer}>
         <Route path="/fighter/:id" component={FighterDetails} />
       </Route>
       <Route path="error" component={ServerError} />
     </Route>
   </Router>, document.getElementById('app'));
