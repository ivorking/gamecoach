import React, { PureComponent as Component } from 'react';
import MainNav from '../components/MainNav';

class Accounts extends Component {
   render() {
      return (
         <div>
            <header className="App-header">
               <h1 className="App-title">Board Games Coach </h1>
            </header>
            <MainNav />
            <h2>Board Games Coach</h2>
            <p>Here you can update your account settings.</p>
         </div>
      )
   }
}

export default Accounts;