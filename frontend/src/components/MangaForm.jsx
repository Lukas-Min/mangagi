import React from 'react';

const MangaForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-x-3 sm:gap-y-1">
      <div className="w-full md:col-span-2">
        <h3 className="italic">Title:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Solo Leveling"
        />
      </div>
      <div className="w-full">
        <h3 className="italic">Year Published:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="2018"
        />
      </div>
      <div className="w-full">
        <h3 className="italic">Author:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="H-Goon"
        />
      </div>
      <div className="w-full">
        <h3 className="italic">Manga State:</h3>
        <select
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          defaultValue=""
        >
          <option value="" disabled hidden>Select State...</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="w-full">
        <h3 className="italic">Manga Status:</h3>
        <select
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          defaultValue=""
        >
          <option value="" disabled hidden>Select Status...</option>
          <option value="Publishing">Publishing</option>
          <option value="Finished">Finished</option>
        </select>
      </div>
      <div className="w-full">
        <h3 className="italic">Genre:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Enter Genre.."
        />
      </div>
      <div className="col-span-1 w-full">
        <h3 className="italic">Tags:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Dropdown"
        />
      </div>
      <div className="col-span-1 md:col-span-2 w-full">
        <h3 className="italic">Description:</h3>
        <textarea
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full h-32 resize-none"
          placeholder="Enter Description.."
        />
      </div>
      <div className="flex justify-center col-span-2 ">
        <button className="px-6 py-2 w-full rounded-lg bg-amaranth hover:bg-blush transition-colors text-white my-3 shadow-sm shadow-[rgba(0,0,0,0.31)]">
          <h1 className="text-sm text-center font-bold">Edit</h1>
        </button>
      </div>
    </div>
  );
};

export default MangaForm;
