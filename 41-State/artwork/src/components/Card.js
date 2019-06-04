import React from 'react'

const Card = (props) => {
  let {painting: {id, image, title, artist: {name}, date, dimensions: {width, height}}} = props
  return (
    <div
      className="ui card centered"
      data-set-painting-id={id}
      onClick={(event)=> {props.clickThisPainting(props.painting)}}
    >
      <div>
        <div>{title} by {name}</div>
        <div>{date}</div>
        <div>{`${width} in. x ${height} in.`}</div>
      </div>
    </div>
  )
}

export default Card
