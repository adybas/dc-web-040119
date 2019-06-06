import React, {Component} from 'react'

class SearchBar extends Component {

  state = {
    checked: false
  }

  handleChange = (e) => {
    this.setState({
      checked: !this.state.checked
    })
    let t = this
    // debugger
    this.props.handleCheck()
  }

  render(){

    const { handleSort, greasedOnly } = this.props

    return(
      <div id="form">
      <select id="form-filter" onChange={handleSort}>
        <option default value="">--Sort By--</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <div>
        <label>Show Greased Hogs Only</label>
        <input className="ui slider checkbox" id="checkbox" name="greased only" type="checkbox" onChange={this.handleChange}/>
      </div>
      </div>
    )
  }
}

export default SearchBar
