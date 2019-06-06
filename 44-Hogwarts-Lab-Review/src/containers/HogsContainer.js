import React from 'react'
import HogCard from '../components/HogCard'

class HogsContainer extends React.Component {
  render(){
    // console.log(this.props.hogs)
    return(
      <div className="ui cards column three wide">
      {this.props.hogs ? this.props.hogs.map(hogObj => <HogCard hog={hogObj}/>):null}
      </div>
    )
  }
}


export default HogsContainer
