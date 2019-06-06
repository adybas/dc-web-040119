import React from 'react'

class Task extends React.Component {
  constructor(props){
    super()
    this.state = {
      done: props.task.done
    }
    console.warn(`Task Class #${props.task.id} constructor()`)
  }

  onCheck = (event) => {
    let newStatus = !this.state.done
    fetch(`http://localhost:3000/tasks/${this.props.task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        done: newStatus
      })
    }).then(res => res.json())
    .then(task => {
      this.setState({done: newStatus})
    })
  }

  componentDidMount(){
    console.warn(`Task Class #${this.props.task.id} componentDidMount()`)
  }

  componentDidUpdate(){
    console.warn(`Task Class #${this.props.task.id} componentDidUpdate()`)
  }

  componentWillUnmount(){
    console.warn(`Task Class #${this.props.task.id} componentWillUnmount()`)
  }

  render(){
    console.warn(`Task Class #${this.props.task.id} render()`)
    return(
      <div>
        <button onClick={this.props.onDelete} data-id={this.props.task.id}>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={this.onCheck}/>
      </div>
    )
  }
}

export default Task
