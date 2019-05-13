import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar';
import Properties from './properties';
import AddProperty from './add-property';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import '../styles/app.css';

library.add(fab, fas, far);

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
