import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  //if some condition, let URL = ????
  return(
    <div className={`ui inverted ${props.color} menu navbar`}>
     <Link to="/" className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </Link>
     <Link to="/" className="item">Home</Link>
     <Link to="/paintings" className="item">Gallery</Link>
   </div>
  )
}

export default NavBar
