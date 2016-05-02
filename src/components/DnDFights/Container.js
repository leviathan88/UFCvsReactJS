import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Fight from './Fight';
import WatchingList from './WatchingList';

class Container extends Component {
  render() {
    return(
      <div>
        <Fight name="Werdum vs Miocic"/>
        <Fight name="Cyborg vs Smith"/>
        <Fight name="Jones vs DC"/>
        <Fight name="Silva vs Hall"/>
        <Fight name="Velasquez vs Browne"/>
        <WatchingList />
      </div>
    );
  }
}

export default DragDropContext (HTML5Backend) Container;
