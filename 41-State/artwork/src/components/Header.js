import React from 'react'

const Header = (props) => {
  return (
    <div className={`ui inverted ${props.color} menu navbar`}>
      <a className="item" href="https://www.google.com">
        <h2 className="ui header">
          <i className={`${props.icon} icon`}></i>
          <div className="content">{props.title}</div>
          <div className="sub header">{props.tagline}</div>
        </h2>
      </a>
    </div>
  )
}

export default Header
