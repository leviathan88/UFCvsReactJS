import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Fight from './Fight';
import WatchingList from './WatchingList';

class Container extends Component {
  render() {
    return (
      <div>
        <Fight name='Velasquez vs Browne'/>
        <Fight name='Werdum vs Miocic'/>
        <Fight name='Alvarez vs RDA'/>
        <Fight name='Jones vs DC'/>
        <Fight name='Thompson vs Macdonald'/>
        <WatchingList/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
