import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePlayer from '../components/HomePlayer';
import HomeSherpa from '../components/HomeSherpa';
import FindSherpa from '../components/FindSherpa';
import FindEvent from '../components/FindEvent';
import Accounts from '../components/Accounts';
import GamesPage from '../components/GamesPage';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path = "/" component = { App } />
         <Route exact path = "/HomePlayer/" component = { HomePlayer } />
         <Route path = "/findsherpa/" component = { FindSherpa } />
         <Route exact path = "/HomeSherpa" component = { HomeSherpa } />
         <Route exact path = "/FindEvent" component = { FindEvent } />
         <Route exact path = "/Accounts" component = { Accounts } />
         <Route exact path = "/GamesPage" component = { GamesPage } />
         <Route component = { NotFound } />
      </Switch>
   </BrowserRouter>
);

export default Router;
