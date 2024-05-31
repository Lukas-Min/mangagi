import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import ImageUpload from '../components/ImageUpload';
import MangaForm from '../components/MangaForm';
import Alert from '@mui/material/Alert';

const AddManga = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [imageFilename, setImageFilename] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [saveMessage, setSaveMessage] = useState(null);

    const addMangaMutation = useMutation({
        mutationFn: async formData => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/add`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                'Content-Type': 'application/json',
                },
            });
    
            // console.log(response)
            if (!response.ok) 
            {
                throw new Error('Failed to add manga');
            }

            return response.json();

    }});

    const handleImageUpload = ({ imageName, imageSrc }) => {
        setImageSrc(imageSrc);
        setImageFilename(imageName);
    };

    const handleMangaSubmit = async () => {
        const formData = {
            title: searchParams.get('title') || '',
            manga_id: searchParams.get('mangaId') || '',
            year_published: searchParams.get('yearPublished') || '',
            author: searchParams.getAll('author'),
            manga_state: searchParams.get('state') || '',
            manga_status: searchParams.get('status') || '',
            chapters: searchParams.get('chapters') || '',
            genre: searchParams.getAll('tags'),
            description: searchParams.get('description') || '',
            cover_art: imageFilename,
            cover_art_src: imageSrc,
        };
    
        try {
            await addMangaMutation.mutateAsync(formData);
            setSaveMessage({ content: 'Manga added successfully!', severity: 'success' });
        } catch (error) {
            setSaveMessage({ content: `${error.message}`, severity: 'error' });
        }
    };


  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[15vw] my-14">
        
      <div className="lg:col-span-2 border-2 order-2 lg:order-1 border-rose rounded-lg bg-raisin px-8 py-6">
        {saveMessage && (
            <div className="w-full">
                <Alert severity={saveMessage.severity} onClose={() => setSaveMessage(null)}>{saveMessage.content}</Alert>
            </div>
        )}
        <h1 className="text-4xl font-bold my-6 text-center">Add Manga</h1>
        <MangaForm onSubmit={handleMangaSubmit} />
        
      </div>
      <div className="lg:col-span-1 border-2 order-1 lg:order-2 border-rose rounded-lg bg-raisin  h-auto width-auto min-h-[30vh] max-h-[30vh] lg:max-h-[70vh]">
        <div className="w-full h-full">
          <ImageUpload className="w-full h-full object-cover" onImageUpload={handleImageUpload} />
        </div>
      </div>
    </section>
  );
};

export default AddManga;
