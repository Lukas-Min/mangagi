import React from 'react';
import ImageUpload from '../components/ImageUpload';
import MangaForm from '../components/MangaForm';

const AddManga = () => {
  return (
    <section className="grid grid-cols-1  lg:grid-cols-3 gap-8 px-[15vw] my-14">
      <div className="lg:col-span-2 border-2 order-2 lg:order-1 border-rose rounded-lg bg-raisin px-8 py-6">
        <h1 className="text-4xl font-bold my-6 text-center">Add Manga</h1>
        <MangaForm />
      </div>
      <div className="lg:col-span-1 border-2 order-1 lg:order-2 border-rose rounded-lg bg-raisin flex items-center justify-center">
        <div className="w-full h-full">
          <ImageUpload />
        </div>
      </div>
    </section>
  );
};

export default AddManga;
