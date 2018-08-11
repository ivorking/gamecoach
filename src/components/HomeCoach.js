import React, { PureComponent as Component } from 'react';
import MainNav from '../components/MainNav';

class HomeCoach extends Component {
   render() {
      return (
         <div>
            <header className="App-header">
               <h1 className="App-title">Board Games Coach </h1>
            </header>
            <MainNav />
            <h2>Board Games Coach</h2>
            <ul>
               <li><a href="/#/findcoach">Book a coach</a></li>
               <li><a href="/#/accounts">Update account</a></li>
            </ul>
         </div>
      )
   }
};

export default HomeCoach;