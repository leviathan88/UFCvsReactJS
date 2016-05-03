import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory  } from 'react-router';
import { createHashHistory } from 'history'

import App from './components/Main';
import EventAppContainer from './components/ListEvents/EventAppContainer';
import FightersAppContainer from './components/SearchFighters/FightersAppContainer';
import FightApp from './components/DnDFights/FightsApp';
import FighterDetails from './components/SearchFighters/FighterDetails';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
// Render the main component into the dom
ReactDOM.render(
  <Router history={appHistory}>
     <Route path="/" component={App}>
       <IndexRoute component={EventAppContainer}/>
       <Route path="fights" component={FightApp}/>
       <Route path="fighters" component={FightersAppContainer}>
         <Route path="details/:fighter_id" component={FighterDetails} />
       </Route>
     </Route>
   </Router>, document.getElementById('app'));
