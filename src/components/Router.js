import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePlayer from '../components/HomePlayer';
import HomeCoach from '../components/HomeCoach';
import FindCoach from '../components/FindCoach';
import FindEvent from '../components/FindEvent';
import Accounts from '../components/Accounts';
import GamesSelect from '../components/GamesSelect';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path = "/" component = { App } />
         <Route exact path = "/HomePlayer/" component = { HomePlayer } />
         <Route exact path = "/FindCoach/" component = { FindCoach } />
         <Route exact path = "/HomeCoach" component = { HomeCoach } />
         <Route exact path = "/FindEvent" component = { FindEvent } />
         <Route exact path = "/Accounts" component = { Accounts } />
         <Route exact path = "/GamesSelect" component = { GamesSelect } />
         <Route component = { NotFound } />
      </Switch>
   </BrowserRouter>
);

export default Router;
