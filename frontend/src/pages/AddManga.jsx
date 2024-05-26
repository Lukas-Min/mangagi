import React from 'react'

const AddManga = () => {
  return (
    <div className='mb-20 px-12 mx-12 my-12'>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 flex justify-center'>Add Manga</h1>

      <section className="">
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
            <h3 className="italic w-full">Author:</h3>
            <h3 className="italic w-full ml-4">Year Published:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full mr-2"
              placeholder=" Enter Author.."
            />
            <input
              type="date"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full ml-2"
              placeholder="Enter Year Uplished.."
            />
          </div>
          <div className="flex justify-right px-7 pt-3">
            <h3 className="italic w-full">Manga Status:</h3>
            <h3 className="italic w-full ml-4">Manga State:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full mr-2"
              placeholder="Enter Manga Status.."
            />
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full ml-2"
              placeholder="Enter Manga State.."
            />
          </div>
          <div className="flex justify-right px-7 pt-3">
            <h3 className="italic w-full">Chapters:</h3>
            <h3 className="italic w-full ml-4">Genre:</h3>
          </div>
          <div className="flex justify-right px-7">
            <input
              type="text"
              class="p-1 inline-block rounded-md bg-rose border text-licorice w-full mr-2"
              placeholder="Enter Chapters.."
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
            <button className="h-50 p-2 py-2 rounded-3xl bg-amaranth w-50 me-3">
              <h1 className="text-sm text-center font-bold">Save Manga</h1>
            </button>
          </div>
        </div>
        <div className="border-4 border-red-300 w-96 h-150 rounded-lg lg:ms-1 md:ms-0 bg-raisin lg:w-96 md:w-96 mb-8 lg:mb-0">
        <h1 className="sm:text-3xl text-xl font-bold my-6 flex justify-center mb-6">Image Upload</h1>
      
        <div className="flex mb-6 justify-center">
            <button className="h-50 p-2 py-2 rounded-3xl bg-amaranth w-50 me-3">
              <h1 className="text-sm text-center font-bold">Upload</h1>
            </button>
          </div>
        
        </div>
      </div>
    </section>
    </div>
  )
}

export default AddManga