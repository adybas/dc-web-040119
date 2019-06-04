import React from 'react'

class Searchbar extends React.Component {
  render(){
    // console.log(this.props.changeFunction)
    return (
      //attempt to change searchTerm here
      <input onChange={this.props.changeFunction}></input>
    )
  }
}

export default Searchbar
