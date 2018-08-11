import React, { Component } from 'react';
import MainNav from '../components/MainNav';

class SelectGames extends Component {
   render() {
      return (
         <div>
            <header className="App-header">
               <h1 className="App-title">Board Games Coach </h1>
            </header>
            <MainNav />
            <p>Games List page</p>
         </div>
      )
   }
}

export default SelectGames;
