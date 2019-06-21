import React, {Component} from 'react'
import logo from '../logo.svg'
import {connect} from 'react-redux'

//we want Header to have a prop called count = store.getState().count
//We need to Map State To Props in Header
class Header extends Component {
  render() {
    // console.log("Header's props: ", this.props)
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{color: this.props.color}}>Welcome to React</h1>
        <h3>{`The current count is less than ${this.props.count + (5 - (this.props.count % 5))}`}</h3>
      </header>
    );
  }
}
//is a function that specifies how do you want props to be mapped to state
//this function takes in state in the store and returns {}
const mapStateToProps = (state) => (
  {
    count: state.count
  }
)
export default connect(mapStateToProps)(Header)


//connect takes in a function returns a HOC(function)


//Make an EnhancedHeader that is a copy of Header but has an additional prop color="blue"
//HOC is a function that takes in a Component and returns an EnhancedComponent
// const withBlue = (SomeComponent) => {
//   class EnhancedComponent extends React.Component {
//     render(){
//       return <SomeComponent color="blue"/>
//     }
//   }
//   return EnhancedComponent
// }
//
// const BlueHeader = withBlue(Header)

// const withCount = (SomeComponent) => {
//   class EnhancedComponent extends React.Component {
//     render(){
//       return <SomeComponent count={store.getState().count}>
//     }
//   }
//   return EnhancedComponent
// }
// CountHeader = withCount(Header)
// CountCounter = withCount(Counter)
