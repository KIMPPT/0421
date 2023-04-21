import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NavHeader.css'
export default function NavHeader() {
  return (
    <div>
        <Link to='/' className='linkstyle'>Home</Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to='/storylist' className='linkstyle'>Story</Link>
        <hr />
    </div>
  )
}
