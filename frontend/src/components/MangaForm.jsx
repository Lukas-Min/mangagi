import React from 'react';
import { SingleOption, AnimatedMulti } from './Dropdown';
import { Tags, Genres, State, Status } from './Dropdown';

const MangaForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-x-3 sm:gap-y-1">
      <div className="w-full lg:col-span-2">
        <h3 className="italic">Title:</h3>
        <input
          type="text"
          className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Solo Leveling"
        />
      </div>
      <div className="w-full lg:col-span-1">
        <h3 className="italic">Year Published:</h3>
        <input
          type="text"
          className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="2018"
        />
      </div>
      <div className="w-full lg:col-span-1">
        <h3 className="italic">Author:</h3>
        <input
          type="text"
          className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="H-Goon"
        />
      </div>
      <div className="w-full lg:col-span-1">
        <h3 className="italic">State:</h3>
        <SingleOption isState={true} />
      </div>
      <div className="w-full lg:col-span-1">
        <h3 className="italic">Status:</h3>
        <SingleOption isState={false} />
      </div>
      <div className="w-full lg:col-span-1">
        <h3 className="italic">Genre:</h3>
        <AnimatedMulti isTags={false} />
      </div>
      <div className="lg:col-span-1 w-full">
        <h3 className="italic">Tags:</h3>
        <AnimatedMulti isTags={true} />
      </div>

      <div className="lg:col-span-2 w-full">
        <h3 className="italic">Description:</h3>
        <textarea
          className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full h-32 resize-none"
          placeholder="Enter Description.."
        />
      </div>
      <div className="flex justify-center w-full lg:col-span-2">
        <button className="px-6 py-2 w-full rounded-lg bg-amaranth hover:bg-blush transition-colors text-white my-3 shadow-sm shadow-[rgba(0,0,0,0.31)]">
          <h1 className="text-base text-center font-bold">Save</h1>
        </button>
      </div>
    </div>
  );
};

export default MangaForm;
