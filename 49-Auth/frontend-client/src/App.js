import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    //check localStorage has a token
    let token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.handleUpdateUser(data)
        this.setState({loading: false})
      })
    }else{
      this.setState({loading: false})
    }
  }

  handleUpdateUser = (currentUser) => {
    this.setState({currentUser})
  }

  showProfile = () => this.state.loading ? null : (
    this.state.currentUser ? <Profile
      user={this.state.currentUser}
    /> : <Redirect to="/login" />
  )

  showLogIn = () => this.state.loading ? null : (
    this.state.currentUser ?
      <Redirect to="/profile" /> :
      <LoginForm handleUpdateUser={this.handleUpdateUser} />
  )

  render(){
    return (
      <Fragment>
        <Nav logged_in={this.state.currentUser} handleUpdateUser={this.handleUpdateUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route exact path="/profile" render={this.showProfile} />
          <Route exact path="/login" render={this.showLogIn} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
