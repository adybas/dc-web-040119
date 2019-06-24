//action creators are functions and create and return action objs
const URL = 'http://localhost:3000/paintings'

function updatePaintingInfo(info){
  return {type:"UPDATE_PAINTING_INFO", payload: info}
}

function votedForPainting(paintingId){
  return {type:"VOTE", payload: paintingId}
}

function changeSearchText(inputText){
  return {type:"CHANGING_SEARCH_TEXT", payload: inputText}
}

function fetchedPaintings(paintings){
  return {type: "FETCHED_PAINTINGS", payload: paintings}
}

function votingForPainting(id){
  return (dispatch, getState) => {
    let painting = getState().paintings.find(p => p.id === id)
    let oldVotes = painting.votes

    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        votes: oldVotes + 1
      })
    })
    // .then(() => {
    //   dispatch({type:"VOTE", payload: id})
    // })
  }
}

function fetchingPaintings(){
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(paintingsArray => {
      dispatch(fetchedPaintings(paintingsArray))
    })
  }
}
//Problem 1: we have to return {}; we can't do async
//Problem 2: dispatch is not within scope of .then()

export {updatePaintingInfo, votingForPainting, changeSearchText, fetchingPaintings, votedForPainting}
