import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-0 text-center">
      <h1 className="text-4xl font-bold mb-2 text-start">About Us</h1>
      <p className="text-4xl my-6 font-semibold">Meet the MangaGu Team!</p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className='border-2 rounded-lg border-blush shadow transform hover:scale-105 transition duration-300 cursor-pointer'>
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-raisin">
            <img
              src="/img/About/MorPaDe.jpg"
              alt="MorPaDe"
              className="w-full h-[50vh] object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blush">MorPaDum</div>
              <p className="text-base">
                Moraleta as (Mor), Paje as (Pa), and Dumawal as (Dum).
              </p>
            </div>
          </div>
        </div>
        <div className='border-2 rounded-lg border-blush shadow transform hover:scale-105 transition duration-300 cursor-pointer'>
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-raisin">
            <img
              src="/img/About/ArMal.jpg"
              alt="ArMal"
              className="w-full h-[50vh] object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blush">MalAr</div>
              <p className="text-base">
                Malaga as (Mal) and Arizala as (Ar).
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti velit, harum reiciendis temporibus debitis autem provident consequuntur aspernatur rerum dolores. Temporibus quibusdam perferendis neque unde rerum hic animi voluptatem?
      </p>
    </div>
  );
};

export default About;
