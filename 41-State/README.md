## Imperative Programming
- Explicitly tell your program every step it needs to execute
- In vanilla JS, find the relevant DOM elements
- Programmatically create, update, or remove DOM elements

## Declarative Programming
- Tells the program 'what' the webpage should be/should look like
- The 'how' is abstracted

## State - Any data in an app that changes over time
- State is similar to props, but it is private and fully managed by the class component (can't be functional)

## Implementing State
- State should be minimal but complete (what)
  - (where)
- Set up the state object using this.state in the constructor
- or outside the constructor
- Don't modify state directly, use this.setState({})
  - works asynchronously

## Virtual DOM
- When does the DOM get re-rendered?
    - if there is a change in props, state, or if we force a update

## Conditional Rendering

## Controlled Forms and Event Callback handlers

## On Your Own
- practice working with other input types (textarea, select, checkbox, radio button)
- https://reactjs.org/docs/forms.html

## Upcoming Lab Review - Animal Lab (Combining It All)
