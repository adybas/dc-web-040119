import React from "react";
import {connect} from 'react-redux'
import {changeSearchText} from '../redux/actions'

const Searchbar = props => {
  return (
    <div className="ui container">
      <div className="ui very large fluid input">
        <input
          type="text"
          placeholder="Search"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
      <div className="ui clearing section divider" />
    </div>
  )
}

//prop: something in the store
const mapStateToProps = (store) => ({
    value: store.searchText
})
//prop: a dispatch/a function
const mapDispatchToProps = (dispatch) => ({
    onChange: (inputText) => {dispatch(   changeSearchText(inputText)  )}
})


export default connect(mapStateToProps, {onChange: changeSearchText})(Searchbar)
// const withValue = connect(mapStateToProps)
// const BetterSearchbar = withValue(Searchbar)
// export default BetterSearchbar
