import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex align-middle justify-center gap-4 p-5 bg-raisin text-rose'>
      <img className='h-16 w-auto' src="./public/img/logo/mangagi.png" alt="Mangagi Logo" />
      <Link className='' to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/add-manga"}>About</Link>
      <Link to={"/edit-manga"}>About</Link>
    </div>
  )
}

export default Navbar