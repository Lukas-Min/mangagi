import React from 'react';

const MangaForm = () => {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
      <div>
        <h3 className="italic">Title:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Solo Leveling"
        />
      </div>
      <div>
        <h3 className="italic">Year Published:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="2018"
        />
      </div>
      <div>
        <h3 className="italic">Author:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="H-Goon"
        />
      </div>
      <div>
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
      <div>
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

      <div>
        <h3 className="italic">Genre:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Enter Genre.."
        />
      </div>
      <div className="col-span-2">
        <h3 className="italic">Tags:</h3>
        <input
          type="text"
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full"
          placeholder="Dropdown"
        />
      </div>
      <div className="col-span-2">
        <h3 className="italic">Description:</h3>
        <textarea
          className="p-1 rounded-md bg-white border-amaranth border text-licorice w-full h-32 resize-none"
          placeholder="Enter Description.."
        />
      </div>
    </div>
  );
};

export default MangaForm;
