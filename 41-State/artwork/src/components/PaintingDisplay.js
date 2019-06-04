import React from 'react'

const PaintingDisplay = (props) => {
  //only render img is props.displayPainting is not null
  return (
    props.displayPainting ?
      <img src={props.displayPainting.image} /> :
      null
  )
}

export default PaintingDisplay
