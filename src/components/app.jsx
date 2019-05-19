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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
    };
  }

  handleLogin = (response) => {
    this.setState({
      userID: response.userID,
    });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({
      userID: null,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onLogin={this.handleLogin} onLogout={this.handleLogout} userID={this.state.userID} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Properties {...props} userID={this.state.userID} />}
          />
          <Route
            exact
            path="/add-property"
            component={AddProperty}
          />
        </Switch>
      </React.Fragment>
    );
  }
};

export default App;
