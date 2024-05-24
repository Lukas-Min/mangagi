import React from "react";

const EditManga = () => {
  return (
    <section className="">
      <div className="flex justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold my-6 text-center">
          Edit Manga
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="border-4 border-red-300 w-150 h-150 rounded-lg bg-raisin mb-14">
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
          <div className="flex justify-right px-7 text-pretty ">
            <input
              type="text"
            class="p-1 inline-block rounded-md bg-rose border text-licorice w-full h-max"
              placeholder="Enter Description.."
            />
          </div>
          <div className="flex mt-6 justify-center">
            <button className="h-50 p-2 py-2 rounded-3xl bg-amaranth w-20 me-3">
              <h1 className="text-sm text-center font-bold">Edit</h1>
            </button>
          </div>
        </div>
        <div className="border-4 border-red-300 w-96 h-150 rounded-lg ms-14 bg-raisin"></div>
      </div>
    </section>
  );
};

export default EditManga;
