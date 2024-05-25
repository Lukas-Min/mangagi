import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to={"/"}><img className='h-auto w-20 sm:w-24 md:w-28 lg:w-36' src="/img/logo/mangagi.png" alt="Mangagi Logo" /></Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/add-manga"}>Add Manga</Link>
              <Link to={"/edit-manga"}>Edit Manga</Link>
              <Link to={"/view-manga"}>View Manga</Link>
              <Link to={"/search-manga"}>Search Manga</Link>
            </ul>
          </div>
          <div className="block md:hidden">
            {/* Hamburger menu icon */}
            <button className=" focus:outline-none" onClick={this.toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {this.state.isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <ul className=" my-4">
              <Link className='block px-4 py-2' to={"/"}>Home</Link>
              <Link className='block px-4 py-2' to={"/about"}>About</Link>
              <Link className='block px-4 py-2' to={"/add-manga"}>Add Manga</Link>
              <Link className='block px-4 py-2' to={"/edit-manga"}>Edit Manga</Link>
              <Link className='block px-4 py-2' to={"/view-manga"}>View Manga</Link>
              <Link className='block px-4 py-2' to={"/search-manga"}>Search Manga</Link>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
