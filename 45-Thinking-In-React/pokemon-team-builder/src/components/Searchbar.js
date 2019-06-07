import React from 'react'

const Searchbar = (props) => {
  return (
    <input onChange={props.handleSearch} className="search" placeholder="Search..."></input>
  )
}

export default Searchbar
