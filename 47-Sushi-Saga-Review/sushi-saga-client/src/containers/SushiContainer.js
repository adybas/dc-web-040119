import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // debugger
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiToDisplay.map((sushiObj)=>{
            return (
              <Sushi key={sushiObj.id}
              eatenSushiIDs={props.eatenSushiIDs}
              eatSushiHandler={props.eatSushiHandler}
              sushi={sushiObj}
              />

            )
          })
        }
        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
