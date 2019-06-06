import React, {Component} from 'react'

const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

class HogCardBack extends Component {
  render(){
    return(
      <div>
        <div>Specialty: {this.props.hog.specialty}</div>
        <div>Greased: {this.props.hog.greased ? "Greased" : "Not Greased"}</div>
        <div>Weight: {this.props.hog[weight]}</div>
        <div>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</div>
      </div>
    )
  }
}

export default HogCardBack
