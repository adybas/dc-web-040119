import React from 'react'

class GreasedCheckbox extends React.Component{

  state = {
    checked: false
  }

  handleCheckbox = () => {
    this.setState({
      checked: !this.state.checked
    }, () => {this.props.handleGreased(this.state.checked)})

  }

  render(){
    return(
      <div>
      <label>Show Greased Hogs Only</label>
      <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox}/>
      </div>
    )
  }
}

export default GreasedCheckbox
