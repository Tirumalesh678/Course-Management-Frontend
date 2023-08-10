import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const Menus = () => {
  return (
    <div>
      <ListGroup>
        <Link className='list-group-item list-group-item-action'
        tag="a" to='/' >Home</Link>
        <Link className='list-group-item list-group-item-action'
        tag="a" to='add-course' >Add Course</Link>
        <Link className='list-group-item list-group-item-action'
        tag="a" to='all-course' >View Course</Link>
        <Link className='list-group-item list-group-item-action'
        tag="a" to='/about' >About</Link>
        <Link className='list-group-item list-group-item-action'
        tag="a" to='/help' >Help</Link>
      </ListGroup>
    </div>
  )
}

export default Menus
