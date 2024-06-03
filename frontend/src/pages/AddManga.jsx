// HOOKS
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

// COMPONENTS
import ImageUpload from '../components/ImageUpload';
import MangaForm from '../components/MangaForm';
import Alert from '@mui/material/Alert';

const AddManga = () => {
    const [imageFilename, setImageFilename] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [saveMessage, setSaveMessage] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        mangaId: '',
        yearPublished: '',
        chapters: '',
        author: [],
        state: '',
        status: '',
        tags: [],  
        description: '',
    });

    const addMangaMutation = useMutation({
        mutationFn: async form => {
            console.log(form);
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/add`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return response.json();

    }});

    const handleImageUpload = ({ imageName, imageSrc }) => {
        setImageSrc(imageSrc);
        setImageFilename(imageName);
    };

    const handleMangaSubmit = async () => {
        const form = {
            title: formData.title || '',
            manga_id: formData.mangaId || '',
            year_published: formData.yearPublished || '',
            author: formData.author,
            manga_state: formData.state || '',
            manga_status: formData.status || '',
            chapters: formData.chapters || '',
            genre: formData.tags,
            description: formData.description || '',
            cover_art: imageFilename || '',
            cover_art_src: imageSrc || '',
        };

        console.log(`Form: ${form}`)
    
        try {
            await addMangaMutation.mutateAsync(form);
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
            <MangaForm onSubmit={handleMangaSubmit} mode={'add'} formData={formData} setFormData={setFormData} />
            
        </div>
        <div className="lg:col-span-1 border-2 order-1 lg:order-2 border-rose rounded-lg bg-raisin  h-auto width-auto min-h-[30vh] max-h-[30vh] lg:max-h-[70vh]">
            <div className="w-full h-full">
                <ImageUpload className="w-full h-full object-cover" onImageUpload={handleImageUpload} mode={'add'} imageFilename={imageFilename} imageSrc={imageSrc} />
            </div>
        </div>
        </section>
    );
};

export default AddManga;
