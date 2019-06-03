import React from 'react'
import Comment from './Comment'

const quotes = [
  {id: 1, content: "hello world", author: "Paul"},
  {id: 2, content: "whats up", author: "JC"},
  {id: 3, content: "haiiiiiiiiii", author: "Ann"},
]

class CommentContainer extends React.Component {
  render(){
    // debugger
    //calculations or logic to do here
    // debugger
    return (
      <div className='comment-container'>
        This is my CommentContainer
        {quotes.map(q => <Comment
          quote={q}
          key={q.id}
        />)}
      </div>
    )
  }
}

export default CommentContainer











//
