import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import PaintingsContainer from "./PaintingsContainer";
import AboutPage from "./AboutPage";
import {connect} from 'react-redux'
import {fetchingPaintings} from '../redux/actions'

class App extends Component {
  componentDidMount(){
    this.props.fetchingPaintings()
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}

//mapStateToProps
const mapDispatchToProps = (dispatch) => ({
  fetchingPaintings: () => {dispatch(fetchingPaintings())}
})

export default withRouter(connect(null, mapDispatchToProps)(App));
