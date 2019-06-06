import React, { Component} from 'react'
import Sortbar from '../components/Sortbar'
import GreasedCheckbox from '../components/GreasedCheckbox'

class Menu extends Component {
  render(){
    return(
      <div>
      <Sortbar handleSort={this.props.handleSort}/>
      <GreasedCheckbox handleGreased={this.props.handleGreased}/>
      </div>

    )
  }
}

export default Menu
