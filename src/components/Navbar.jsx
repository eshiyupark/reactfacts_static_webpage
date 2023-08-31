import React from 'react'
import reactIcon from '../assets/react-icon-small.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logosection'>
        <img src={reactIcon} className='navbar-icon'></img>
        <h2 className='navbar-title'>ReactFacts</h2>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  )
}
