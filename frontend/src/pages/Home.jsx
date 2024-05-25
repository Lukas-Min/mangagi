import React from 'react';
import MangaCover from "../components/MangaCover";

const Home = () => {
  return (
    <div className="container mx-auto px-5 py-8">
      <div className="grid gap-y-6 gap-x-3 justify-center px-0 md:px-28" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="flex justify-center">
            <MangaCover index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
