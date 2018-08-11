import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import { Jumbotron, Button } from 'reactstrap';

class FindCoach extends Component {

   constructor(props) {

      super(props);

      this.state = {
         displayCalendar: false
      };

   }

   displayCalendars = () => {
      this.setState({
         displayCalendar: !this.state.displayCalendar
      })
   }

   render() {

      let calendar = null;
      if (this.state.displayCalendar) {
         calendar = (
            <div>
               <p>
                  muggins
               </p>
            </div>
         )
      }

      return (
         <div>
            <header className="App-header">
               <h1 className="App-title">Board Games Coach </h1>
            </header>
            <MainNav />
            <div>
               <Jumbotron>
                  <h5 className="display-3">Find a coach for your event...</h5>
                  <p className="lead">Do you need a board or card game coach for next next games night?<br />
                     Or do you want to improve your skills in a board, card or video game?</p>
                  <hr className="my-2" />
                  <p>This is the first step... Click to select the date.</p>
                  <p className="lead">
                     <Button color="primary" onClick={this.displayCalendars}>Select date</Button>
                  </p>
               </Jumbotron>
            </div>
            {calendar}
         </div>
      )
   }

}

export default FindCoach;