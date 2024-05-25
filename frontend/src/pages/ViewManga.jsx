import React from "react";

const ViewManga = (Title) => {
  return (
    <section className="mx-24">
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center">
        <div className="grow-0 my-11 mx-10">
          <div className="flex flex-col h-16 mb-2 xl:justify-between xl:flex-row">
            <h1 className="text-3xl font-bold xl:my-6 text-center xl:text-left">Title</h1>
            <h1 className="italic xl:my-6 xl:pt-3 xl:text-right text-center">
              Author
            </h1>
          </div>
          <div className="flex mt-6 mb-6 justify-center items-center xl:items-start xl:justify-start">
            <div className="w-36 h-50 p-2 py-2 rounded-xl bg-raisin">
              <h1 className="text-sm text-center">Date Published</h1>
            </div>
            <div className="w-36 mx-2 w-50 h-50 p-2 py-2 rounded-xl bg-raisin">
              <h1 className="text-sm text-center">Status</h1>
            </div>
            <div className="w-36 h-50 p-2 py-2 rounded-xl bg-raisin">
              <h1 className="text-sm text-center">State</h1>
            </div>
          </div>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <h1 className="sm:text-xl text-2xl font-bold mt-6 mb-3 text-center xl:text-left">Tags</h1>
          </div>
          <div className="flex justify-center items-center xl:justify-start xl:items-center">
            <div className="inline-block p-2 py-2 rounded-xl bg-blush text-licorice me-3">
              <h1 className="text-sm text-center font-bold">Fluff</h1>
            </div>
            <div className="inline-block p-2 py-2 rounded-xl bg-blush text-licorice me-3">
              <h1 className="text-sm text-center font-bold">Webtoon</h1>
            </div>
            <div className="inline-block p-2 py-2 rounded-xl bg-blush text-licorice me-3">
              <h1 className="text-sm text-center font-bold">
                Original Character
              </h1>
            </div>
          </div>
          <div className="flex mt-6 justify-center items-center xl:justify-start xl:items-center">
            <button className="h-50 p-2 py-2 rounded-3xl bg-amaranth w-20 me-3">
              <h1 className="text-sm text-center font-bold">Edit</h1>
            </button>
            <button className="h-50 p-2 py-2 rounded-3xl bg-amaranth w-20">
              <h1 className="text-sm text-center font-bold">Delete</h1>
            </button>
          </div>
        </div>
        <div className="grow-0">
          <div className="border-4 border-red-300 w-72 h-128 mt-24 xl:my-24 mx-24 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default ViewManga;
