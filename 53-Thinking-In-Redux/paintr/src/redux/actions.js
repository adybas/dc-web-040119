//action creators are functions and create and return action objs

function updatePaintingInfo(info){
  return {type:"UPDATE_PAINTING_INFO", payload: info}
}

function voteForPainting(paintingId){
  return {type:"VOTE", payload: paintingId}
}

function changeSearchText(inputText){
  return {type:"CHANGING_SEARCH_TEXT", payload: inputText}
}

export {updatePaintingInfo, voteForPainting, changeSearchText}
