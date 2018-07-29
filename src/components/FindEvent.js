import React, { PureComponent as Component } from 'react';

class FindEvent extends Component {
   render() {
      return (
         <div>
            <h2>Board Games Sherpa</h2>
            <ul>
               <li><a href="/#/findsherpa">Book a sherpa</a></li>
               <li><a href="/#/accounts">Update account</a></li>
            </ul>
         </div>
      )
   }
}

export default FindEvent;