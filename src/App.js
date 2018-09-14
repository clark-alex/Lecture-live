import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <HashRouter>
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </AppWrapper>
    </HashRouter>
  );
}
const AppWrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  height: 100vh;
  width: 100vw;
`;

export default App;
