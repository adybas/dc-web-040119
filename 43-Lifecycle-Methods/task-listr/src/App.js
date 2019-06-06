import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

// const sampleTasks = [
//   {id:1, text: "wake up", done: true},
//   {id:2, text: "eat lunch", done: false},
//   {id:3, text: "go to sleep", done: false}
// ]

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn("App Class constructor()")
  }

  componentDidMount(){
    console.warn("App Class componentDidMount()")
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksArray => {
      this.setState({taskList: tasksArray})
    })
  }

  componentDidUpdate(){
    console.warn("App Class componentDidUpdate()")
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onRemoveTask = (event) => {
    let id = event.target.dataset.id
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(deletedTask => {
      //how to remove a task from an array
      let taskListCopy = [...this.state.taskList]
      let index = taskListCopy.findIndex(task => task.id === parseInt(id))
      taskListCopy.splice(index, 1)
      this.setState({
        taskList: this.state.taskList.filter(task => task.id !== parseInt(id))
      })
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    let taskData = {
      text: event.currentTarget[0].value,
      done: false
    }
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(taskData)
    }).then(res => res.json())
    .then(newTaskObj => {
      this.setState({
        taskList: [...this.state.taskList, newTaskObj]
      })
    }).catch((error) => {
      alert("Server is down: ", error)
    })
  }

  render() {
    console.warn("App Class render()")
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange}
          onSubmit={this.onAddNewTask}
        />
        <TaskList
          tasks={this.state.taskList}
          onDelete = {this.onRemoveTask}
        />
      </div>
    );
  }
}

export default App;
