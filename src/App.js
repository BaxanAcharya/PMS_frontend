import React from 'react';
import './App.css';
import login from './components/login'
import register from './components/register'
import dashboard from './components/dashboard'
import addStudent from './components/addStudent'
import Notfound from "./components/notFound";
import Container from 'react-bootstrap/Container'
import ProtectRoutes from "./components/private/protectRoutes";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={login} />
          <Route exact path='/register' component={register} />
          <ProtectRoutes exact path='/dashboard' component={dashboard} />
          <ProtectRoutes exact path='/addStudent' component={addStudent} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </Container>



  );
}

export default App;
