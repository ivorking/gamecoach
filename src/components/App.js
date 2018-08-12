import React, { Component } from 'react';
import './styles/App.css';
import MainNav from '../components/MainNav';
import FindCoach from '../components/FindCoach';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // getInitialState: function() {
  //   return {
  //     eventDate: this.props.eventDate;
  //   }
  // }

  changeState() {

  }

  // if (FindCoach.state.selectedDay) {
  //   var dateStore = this.state.selectedDay;
  //   return <Redirect to='/' />
  // }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Board Games Coach </h1>
        </header>
        <MainNav />
        <p className="App-intro"><br />
          Board, card and video games coaching app - find the perfect coach for yourself or your next games night!
        </p>
      </div>
    );
  }
}

export default App;
