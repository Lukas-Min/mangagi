// MangaCover.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MangaCover = ({ index }) => {
  return (
    <Link to={`/manga/${index + 1}`} className="border border-rose rounded-lg overflow-hidden object-cover w-52 sm:w-64 md:w-64">
      <img
        src={`https://via.placeholder.com/400x500?text=Image${index + 1}`}
        alt={`Image ${index + 1}`}
        className="w-auto h-auto"
      />
      <div className="p-4 ">
        <h3 className="text-xl font-bold mb-2">Title {index + 1}</h3>
        <p className="">Chapter {Math.floor(Math.random() * 200)}</p>
      </div>
    </Link>
  );
}

export default MangaCover;
