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
      <nav className="border-b-2 border-b-blush p-4 z-20 top-0 sticky bg-licorice mb-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to={"/"}><img className='h-auto w-24 md:w-28 lg:w-36' src="/img/logo/mangagi.png" alt="Mangagi Logo" /></Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <Link className='px-5 py-1 hover:bg-blush transition-colors rounded-lg' to={"/"}>Home</Link>
              <Link className='px-5 py-1 hover:bg-blush transition-colors rounded-lg' to={"/about"}>About</Link>
              <Link className='px-5 py-1 hover:bg-blush transition-colors rounded-lg' to={"/add-manga"}>Add Manga</Link>
              <Link className='px-5 py-1 hover:bg-blush transition-colors rounded-lg' to={"/edit-manga"}>Edit Manga</Link>
              <Link className='px-5 py-1 hover:bg-blush transition-colors rounded-lg' to={"/view-manga"}>View Manga</Link>
              <Link className='px-5 py-1 hover:bg-blush transition-colors rounded-lg' to={"/search-manga"}>Search Manga</Link>
            </ul>
          </div>
          <div className="block lg:hidden">
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
          <div className="lg:hidden">
            <ul className=" my-4">
              <Link className='block px-4 py-2 hover:bg-blush transition-colors rounded-lg' to={"/"}>Home</Link>
              <Link className='block px-4 py-2 hover:bg-blush transition-colors rounded-lg' to={"/about"}>About</Link>
              <Link className='block px-4 py-2 hover:bg-blush transition-colors rounded-lg' to={"/add-manga"}>Add Manga</Link>
              <Link className='block px-4 py-2 hover:bg-blush transition-colors rounded-lg' to={"/edit-manga"}>Edit Manga</Link>
              <Link className='block px-4 py-2 hover:bg-blush transition-colors rounded-lg' to={"/view-manga"}>View Manga</Link>
              <Link className='block px-4 py-2 hover:bg-blush transition-colors rounded-lg' to={"/search-manga"}>Search Manga</Link>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
