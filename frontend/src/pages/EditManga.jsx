import React from 'react';


// HOOKS
import { useParams } from 'react-router-dom';


// COMPONENTS
import ImageUpload from '../components/ImageUpload';
import MangaForm from '../components/MangaForm';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';


const EditManga = () => {
  
    const { id } = useParams();

      return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[15vw] my-14">
      <div className="lg:col-span-2 border-2 order-2 lg:order-1 border-rose rounded-lg bg-raisin px-8 py-6">
        <h1 className="text-4xl font-bold my-6 text-center">Edit Manga</h1>
        <MangaForm />
        <div className="flex justify-center w-full lg:col-span-2 gap-2">
          <SaveButton />
          <CancelButton id={id} />
        </div>
      </div>
      <div className="lg:col-span-1 border-2 order-1 lg:order-2 border-rose rounded-lg bg-raisin  h-auto width-auto min-h-[30vh] max-h-[30vh] lg:max-h-[60vh]">
        <div className="w-full h-full">
          <ImageUpload className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );

};

export default EditManga;
