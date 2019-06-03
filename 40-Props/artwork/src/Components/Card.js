//functional component
import React from 'react'

const generateDimensionsString = (x, y) => {
  return `${x} in. x ${y} in.`
}

const Card = (props, arg2) => {
  const {painting: {image, title, artist: {name}, date, dimensions: {width, height}}} = props
  console.log(image, title, name, date, width, height)
  console.log(arg2)
  return (
    <div className="ui card">
      <div>
        <img src={image} alt="painting" />
        <div>{title} by {name}</div>
        <div>{date}</div>
        <div>{generateDimensionsString(width, height)}</div>
      </div>
    </div>
  )
}

export default Card
