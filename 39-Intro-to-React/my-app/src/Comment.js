import React, {Component} from 'react'

// class Comment extends Component {
//   render(){
//     return (
//       <div className="comment">
//         {this.props.quote.content} - {this.props.quote.author}
//       </div>
//     )
//   }
// }

//function named Comment
const Comment = (props) => {
  return (
    <div className="comment">
     {props.quote.content} - {props.quote.author}
    </div>
  )
}

export default Comment

















//
