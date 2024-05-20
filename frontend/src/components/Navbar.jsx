import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex align-middle justify-center gap-4 p-5 bg-raisin text-rose'>
      <img className='h-16 w-auto' src="./public/img/logo/mangagi.png" alt="Mangagi Logo" />
      <Link className='' to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/add-manga"}>Add Manga</Link>
      <Link to={"/edit-manga"}>Edit Manga</Link>
    </div>
  )
}

export default Navbar