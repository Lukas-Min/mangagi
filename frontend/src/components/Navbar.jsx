import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around p-5 bg-licorice border-b-blush border-b-2'>
      <img className='h-16 w-auto' src="/img/logo/mangagi.png" alt="Mangagi Logo" />
      <div className='flex gap-4'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/add-manga"}>Add Manga</Link>
        <Link to={"/edit-manga"}>Edit Manga</Link>
      </div>
    </div>
  )
}

export default Navbar