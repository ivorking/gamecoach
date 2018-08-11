import React, { PureComponent as Component } from 'react';
import MainNav from '../components/MainNav';

class FindEvent extends Component {
   render() {
      return (
         <div>
            <header className="App-header">
               <h1 className="App-title">Board Games Coach </h1>
            </header>
            <MainNav />
            <p>Find an Event to Coach!</p>
         </div>
      )
   };
};

export default FindEvent;