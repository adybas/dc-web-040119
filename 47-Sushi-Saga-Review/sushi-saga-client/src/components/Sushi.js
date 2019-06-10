import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)
  // debugger
  function clickHandler(_){
    props.eatSushiHandler(props.sushi.id)
  }


  return (
    <div className="sushi">
      <div className="plate"
           onClick={clickHandler}>
        {
          /* Tell me if this sushi has been eaten! */

          // does eatenSushiIDs include props.sushi.id
           props.eatenSushiIDs.includes(props.sushi.id) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
