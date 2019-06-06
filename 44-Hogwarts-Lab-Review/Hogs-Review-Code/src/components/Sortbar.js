import React from 'react'

class SortBar extends React.Component {

  state = {
    selectedTerm: ""
  }

  handleSelect = (e) => {
    this.setState({
      selectedTerm: e.target.value
    })
    this.props.handleSort(e.target.value)

  }

  render(){
    return(
      <div>
        <select onChange={this.handleSelect}>
          <option value="" selected>--Sort By--</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }
}

export default SortBar
