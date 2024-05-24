import React from "react";

const EditManga = () => {
  return (
    <section className="">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold my-6 text-center">
          Edit Manga
        </h1>
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:items-center lg:justify-center lg:pb-11 md:justify-center md: items-center px-8">
        <div className="border-4 border-red-300 md:w-160 h-150 rounded-lg bg-raisin mb-14 lg:mb-0 lg:mr-14 lg:items-center lg:justify-center sm:items-center sm:justify-center">
          <div className="flex justify-right px-7 pt-7">
            <h3 className="italic">Title:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full"
              placeholder="Enter Title.."
            />
          </div>
          <div className="flex justify-right px-7 pt-3">
            <h3 className="italic w-full">Year Published:</h3>
            <h3 className="italic w-full ml-4">Author:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full mr-2"
              placeholder="Enter Year Published.."
            />
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full ml-2"
              placeholder="Enter Author.."
            />
          </div>
          <div className="flex justify-right px-7 pt-3">
            <h3 className="italic w-full">Manga State:</h3>
            <h3 className="italic w-full ml-4">Manga Status:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full mr-2"
              placeholder="Enter State.."
            />
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full ml-2"
              placeholder="Enter Status.."
            />
          </div>
          <div className="flex justify-right px-7 pt-3">
            <h3 className="italic w-full">Genre:</h3>
            <h3 className="italic w-full ml-4">Tags:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full mr-2"
              placeholder="Enter Genre.."
            />
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full ml-2"
              placeholder="Dropdown"
            />
          </div>
          <div className="flex justify-right px-7 pt-3">
            <h3 className="italic w-full">Description:</h3>
          </div>
          <div className="flex justify-right px-7">
            <textarea
              type="text"
            class="p-1 inline-block rounded-md bg-rose border text-licorice w-full h-32 overflow-y-auto resize-none"
              placeholder="Enter Description.."
            />
          </div>
          <div className="flex mt-6 justify-center">
            <button className="h-50 p-2 py-2 rounded-3xl bg-amaranth w-20 me-3">
              <h1 className="text-sm text-center font-bold">Edit</h1>
            </button>
          </div>
        </div>
        <div className="border-4 border-red-300 w-96 h-150 rounded-lg lg:ms-1 md:ms-0 bg-raisin lg:w-96 md:w-96 mb-8 lg:mb-0"></div>
      </div>
    </section>
  );
};

export default EditManga;
