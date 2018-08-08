import React, { PureComponent as Component } from 'react';

class HomeCoach extends Component {
   render() {
      return (
         <div>
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