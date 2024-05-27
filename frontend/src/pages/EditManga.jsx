import React from 'react';
import ImageUpload from '../components/ImageUpload';
import MangaForm from '../components/MangaForm';

const EditManga = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[15vw] my-14">
      <div className="lg:col-span-2 border-2 border-rose rounded-lg bg-raisin px-8 py-6">
        <h1 className="text-4xl font-bold my-6 text-center">Edit Manga</h1>
        <MangaForm />
        <div className="flex justify-center">
          <button className="px-6 py-2 w-full rounded-lg bg-amaranth hover:bg-blush transition-colors text-white my-3">
            <h1 className="text-sm text-center font-bold">Edit</h1>
          </button>
        </div>
      </div>
      <div className="col-span-1 border-2 border-rose rounded-lg bg-raisin flex items-center justify-center lg:max-h-none">
        <div className="w-full h-full lg:max-h-full">
          <ImageUpload />
        </div>
      </div>
    </section>
  );
};

export default EditManga;
