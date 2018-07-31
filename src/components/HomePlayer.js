import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class HomePlayer extends Component {
   render() {
      return (
         <div>
            <h2>Board Games Sherpa</h2>
            <p className = "Page-type">Player Home</p>
            <p>Select a menu item below...</p>
            <ul>
               <li><a href="/findsherpa">Find a Sherpa for an event</a></li>
               <li><a href="/findsherpa">Update favourite games list</a></li>
               <li><a href="/accounts">Account</a></li>
            </ul>
         </div>
      )
   }
};

export default HomePlayer;