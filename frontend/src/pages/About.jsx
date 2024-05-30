import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-0 text-center">
      <h1 className="text-4xl font-bold mb-2 text-start">About Us</h1>
      <p className="text-4xl my-6 font-semibold">Meet the MangaGu Team!</p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className='border-2 rounded-lg border-blush shadow transform hover:scale-105 transition duration-300'>
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-raisin">
            <img
              src="/img/team/MorPaDe.jpg"
              alt="MorPaDe"
              className="w-full h-[50vh] object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blush">MorPaDum</div>
              <p className="text-base">
                Moraleta as (Mor), Paje as (Pa), and Dumawal as (Dum).
                <hr className='my-3' />
                <span className='font-bold'>Julius Caesar Moraleta</span> as a Frontend Developer <br />
                <span className='font-bold'>Nathan Ronnie Paje</span> as a Backend Developer <br />
                <span className='font-bold'>Leonard John Dumawal</span> as a Backend Developer
              </p>
            </div>
          </div>
        </div>
        <div className='border-2 rounded-lg border-blush shadow transform hover:scale-105 transition duration-300'>
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-raisin">
            <img
              src="/img/team/ArMal.jpg"
              alt="ArMal"
              className="w-full h-[50vh] object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blush">MalAr</div>
              <p className="text-base">
                Malaga as (Mal) and Arizala as (Ar).
              </p>
              <p className="text-base">
                <hr className='my-3' />
                <span className='font-bold'>Andrea Kate Malaga</span> as a Frontend Developer <br />
                <span className='font-bold'>Jaeni Alison Arizala</span> as a Frontend Developer <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg mt-8">

      </p>
    </div>
  );
};

export default About;
