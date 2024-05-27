import React from "react";

const MangaViewDetails = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center pt-1">
      <div className="grow-0 my-11 mx-10">
        <div className="flex flex-col h-16 mb-2 xl:justify-between xl:flex-row">
          <h1 className="text-4xl font-bold xl:my-6 text-center xl:text-left">
            Title
          </h1>
        </div>

        <div className="flex mt-6 mb-6 justify-between">
          <div className="w-full h-50 p-2 py-2">
            <h1 className="text-xl text-left">Author</h1>
          </div>
          <div className="w-full mx-2 w-50 h-50 p-2 py-2">
            <h1 className="text-xl text-right">Year Published</h1>
          </div>
        </div>

        <div className="flex mt-6 mb-6 justify-between">
          <div className="w-full h-50 p-2 py-2">
            <h1 className="text-xl text-left">Status</h1>
          </div>
          <div className="w-full mx-2 w-50 h-50 p-2 py-2">
            <h1 className="text-xl text-right">State</h1>
          </div>
        </div>

        <p class="text-justify text-lg py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <h1 className="sm:text-2xl text-2xl font-bold mt-6 mb-3 text-center xl:text-left pb-4">
            Tags
          </h1>
        </div>
        <div className="flex justify-center items-center xl:justify-start xl:items-center gap-x-2">
          <div className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
            <h1 className="text-sm text-center font-bold">Fluff</h1>
          </div>
          <div className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
            <h1 className="text-sm text-center font-bold">Webtoon</h1>
          </div>
          <div className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
            <h1 className="text-sm text-center font-bold">
              Original Character
            </h1>
          </div>
          <div className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
            <h1 className="text-sm text-center font-bold">NSFW</h1>
          </div>
          <div className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
            <h1 className="text-sm text-center font-bold">Shoujo Ai</h1>
          </div>
          <div className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
            <h1 className="text-sm text-center font-bold">WuWa</h1>
          </div>
        </div>
        <div className="flex mt-6 justify-between items-center xl:justify-between xl:items-center">
          <button className="h-12  rounded-3xl bg-amaranth w-60 me-3">
            <h1 className="text-sm text-center font-bold">Edit</h1>
          </button>
          <button className="h-12 rounded-3xl bg-amaranth w-60">
            <h1 className="text-sm text-center font-bold">Delete</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangaViewDetails;
