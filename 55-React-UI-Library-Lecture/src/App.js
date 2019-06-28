import React from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data'
import CandidateCard from './components/Card'
import { Card } from 'semantic-ui-react'

class App extends React.Component {

  state = {
    candidates: []
  }

  componentDidMount(){
    this.setState({
      candidates: data
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Debate Tracker</h1>
          <Card.Group itemsPerRow={4}>
          {this.state.candidates.map((c,i) =>
          <CandidateCard index={i} candidate={c} />)}
          </Card.Group>
      </div>
    )
  }
}

export default App;
