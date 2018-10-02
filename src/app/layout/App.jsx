import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  // Components are required to have a render() function
  render() {
    return (
      // this is JSX, html-looking business that gets compiled into JS and then is injected into the html page 
      // have to wrap elements in a div for some reason? it's a .jsx thing 
      <div>
        <NavBar/>
      <Container className="main">
        <EventDashboard/>
      </Container>  
      </div>
    );
  }
}

export default App;
