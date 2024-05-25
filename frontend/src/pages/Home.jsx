import React from 'react';
import MangaCover from "../components/MangaCover";

const Home = () => {
  return (
    <div className="container mx-auto p-4 py-11">
      <div className="grid gap-11 justify-center" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flex justify-center">
            <MangaCover index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
