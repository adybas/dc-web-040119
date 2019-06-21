import paintingsData from '../paintings.json'
import {combineReducers} from 'redux'
// const initialState = {
//   paintings: paintingsData.paintings,
//   searchText: ""
// }

//oldState is the old value of searchText, what we return is the new value of searchText
const searchTextReducer = (oldSearchText="", action) => {
  switch (action.type) {
    case "CHANGING_SEARCH_TEXT":
      return action.payload
    default:
      return oldSearchText
  }
}

const paintingsReducer = (oldPaintings=paintingsData.paintings, action) => {
  switch (action.type) {
    case "VOTE":
      let newPaintings = oldPaintings.map(p => (p.id !== action.payload ?
        p : {...p,votes: p.votes + 1}))
      return newPaintings
    case "UPDATE_PAINTING_INFO":
      return oldPaintings.map(painting => {
        if(painting.id === action.payload.paintingId){
          return {
            ...painting,
            title: action.payload.title,
            artist: {
              ...painting.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          }
        }
        return painting
      })
    default:
      return oldPaintings
  }
}

//takes in an object that maps the state to its reducer
//state: reducer
const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
})

export default rootReducer
