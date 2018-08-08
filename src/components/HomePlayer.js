import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class HomePlayer extends Component {
   render() {
      return (
         <div>
            <h2 className = "App-header">Board Games Coach</h2>
            <p className = "Page-type">Player Home</p>
            <p className = "Ordinary-text">Select a menu item below...</p>
            <ul>
               <li><a href="/findcoach">Find a Coach for an event</a></li>
               <li><a href="/GamesPage">Update favourite games list</a></li>
               <li><a href="/accounts">Account</a></li>
            </ul>
         </div>
      )
   }
};

export default HomePlayer;