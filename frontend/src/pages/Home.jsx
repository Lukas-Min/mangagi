import React from 'react';
import MangaCover from '../components/MangaCover';

const Home = () => {
  return (
    <div className="container mx-auto px-[5vw]">
      <h1 className='text-3xl font-bold mb-5'>Your Manga List</h1>
      <MangaCover />
    </div>
  );
}

export default Home;
