import React, { Component } from 'react';
import './App.css';
import Table from './components/data_table/Table';
import { getPollsLimt, getData, getParties } from './lib/electiondb';

class App extends Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      parties: [],
      data: { polls: [] }
    }
    getPollsLimt(10, polls => {
      let newState = this.state;
      newState.polls = polls;
      this.setState(newState);
    });
    getData(data => {
      let newState = this.state;
      newState.data = data;
      window.data = data;
      this.setState(newState);
    });
    getParties(parties => {
      let newState = this.state;
      newState.parties = parties;
      this.setState(newState);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Table polls={this.state.polls} parties={this.state.parties} />
      </div>
    );
  }
}

export default App;
