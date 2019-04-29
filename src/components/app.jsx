import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar';
import Properties from './properties';
import AddProperty from './add-property';

import '../styles/app.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
