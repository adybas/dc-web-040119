import React from 'react'
import Sushi from '../components/Sushi.js'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  // debugger
  return (
    <React.Fragment>
      <div className="belt">
        {
          /*
             Render 4 Sushi components here!
          */
          // imagine props.four_sushi.length = 4
          props.four_sushis.map(sushiObj => {
            return <Sushi
            key={sushiObj.id} sushi={sushiObj} eatenSushis={props.eatenSushis}
            eatSushiHandler={props.eatSushiHandler}
            />
          })
          // ["test","test","test","test"]
          // [<Sushi />,<Sushi />,<Sushi />,<Sushi />]
        }
        <MoreButton clickHandler={props.moreButtonHandler}/>
      </div>
      <div id="newest!">

      </div>
    </React.Fragment>

  )
}

export default SushiContainer
