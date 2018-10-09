import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import EventForm from '../../features/events/EventForm/EventForm';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import PeopleDetailed from '../../features/user/UserDetailed/UserDetailed';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import HomePage from '../../features/home/HomePage'
import TestComponent from '../../features/testArea/TestComponent';
import ModalManager from '../../features/Modals/ModalManager'

class App extends Component {
  // Components are required to have a render() function
  render() {
    return (
      // this is JSX, html-looking business that gets compiled into JS and then is injected into the html page 
      // have to wrap elements in a div for some reason? it's a .jsx thing 
      <div>
        <ModalManager />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route path='/(.+)' render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/test' component={TestComponent} />
                <Route path='/event/:id' component={EventDetailedPage} />
                <Route path='/manage/:id' component={EventForm} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={PeopleDetailed} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
