const initialState = {
  count: 50
}

const reducer = (oldState=initialState, action) => {
  switch (action.type) {
    case "CLICKED_PLUS":
      return {...oldState, count: oldState.count + action.num}
    case "CLICKED_MINUS":
      return {...oldState, count: oldState.count - action.num}
    default:
      return oldState
  }
}

export default reducer
