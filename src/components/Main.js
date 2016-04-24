require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = "https://assets.toptal.io/uploads/blog/category/logo/291/react.png";

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Welcome to Distreacter!</h1>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">writing reactive apps</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
