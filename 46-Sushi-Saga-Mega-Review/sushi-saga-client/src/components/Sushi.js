import React, { Fragment } from 'react'

const Sushi = (props) => {
  // debugger

  // const {img_url, price, name} = props.sushi
  // const {sushi:{img_url, name, price}} = props;
  const {sushi} = props;
  const {img_url, price, name, id} = sushi
  // debugger
  return (
    <div className="sushi">
      <div className="plate"
           onClick={
             (e) => {
               console.log("our props", props)
               // debugger
               props.eatSushiHandler(id, price)

             }
           }>
        {
          /* Tell me if this sushi has been eaten! */
          // does the eatenSushis array include this sushi id
          props.eatenSushis.includes(props.sushi.id) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
