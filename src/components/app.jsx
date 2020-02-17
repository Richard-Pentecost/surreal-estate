import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import Properties from './properties';
import AddProperty from './add-property';
import SavedProperties from './saved-properties';
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
      <Router>
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
            <Route
              exact
              path="/saved-properties"
              render={(props) => {
                return (
                  this.state.userID ?
                    <SavedProperties {...props} userID={this.state.userID} />
                    :
                    <Redirect to="/" />
                );
              }}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
};

export default App;
