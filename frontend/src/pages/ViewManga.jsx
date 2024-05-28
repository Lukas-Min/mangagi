import React from "react";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { toUpperCase, isObjectId } from '../../utils';

// Components
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import SaveButton from '../components/SaveButton';

const ViewManga = () => {
    const { id } = useParams();

    let response;

    const { data: mangaInfo, isLoading, error } = useQuery({
        queryFn: async () => {
            if(isObjectId(id)) {
                response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/find/${id}`);
            } else {
                response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/${id}`);
            }
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            return data;
        },
        queryKey: ['mangaInfo'],
    });

    const saveMangaDetails = async () => {
        try {
            const saveResponse = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mangaInfo.data),
            });

            if (!saveResponse.ok) {
                throw new Error('Failed to save manga details');
            }

            const saveData = await saveResponse.json();
            console.log('Manga saved successfully:', saveData);
            alert('Manga saved successfully!');
        } catch (err) {
            console.error('Error saving manga:', err);
            alert('Error saving manga:', err.message);
        }
    };

    if (isLoading) return <h1>Loading...</h1>; // You can use this to create a loader...
    if (error) return <h1>Error: {error.message}</h1>; // You can use this to return a specific error if fetching data from db using the API failed.

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[15vw] me-24 pb-64">
                <div className="lg:col-span-2">
                    
                    <div className="flex flex-col-reverse xl:flex-row justify-center items-center pt-1">
                        <div className="grow-0 my-11 mx-10">
                            <div className="flex flex-col h-16 mb-2 xl:justify-between xl:flex-row">
                                <h1 className="text-4xl font-bold xl:my-6 text-center xl:text-left">{mangaInfo.data.title}</h1>
                            </div>

                            <div className="flex mt-6 mb-6 justify-between">

                                <div className="w-full h-50 p-2 py-2">
                                {mangaInfo.data.author.map((author, index) => (
                                    <h1 key={index} className="text-xl text-left">{author}</h1>                    
                                ))}
                                </div>

                                <div className="w-full mx-2 w-50 h-50 p-2 py-2">
                                    <h1 className="text-xl text-right">{mangaInfo.data.year_published ? mangaInfo.data.year_published : "Year unknown"}</h1>
                                </div>

                            </div>

                            <div className="flex mt-6 mb-6 justify-between">

                                <div className="w-full h-50 p-2 py-2">
                                    <h1 className="text-xl text-left">{toUpperCase(mangaInfo.data.manga_status)}</h1>
                                </div>

                                <div className="w-full mx-2 w-50 h-50 p-2 py-2">
                                    <h1 className="text-xl text-right">{toUpperCase(mangaInfo.data.manga_state)}</h1>
                                </div>

                            </div>

                            {(!mangaInfo.data.description) ? ( <p className="text-justify text-lg py-5">
                                No available description.
                            </p>
                            ) : (<p className="text-justify text-lg py-5">
                                {mangaInfo.data.description.split('\n').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>)}

                            <div>
                                <h1 className="sm:text-2xl text-2xl font-bold mt-6 mb-3 text-center xl:text-left pb-4">
                                    Tags
                                </h1>
                            </div>

                            <div className="flex justify-center items-center xl:justify-start xl:items-center gap-x-2">
                            {mangaInfo.data.genre.map((tag, index) => (
                                <div key={index} className="inline-block py-3 px-1 rounded-xl bg-blush text-licorice grow">
                                    <h1 className="text-sm text-center font-bold">{tag}</h1>
                                </div>
                            ))}        
                            </div>

                            <div className="flex mt-6 justify-between items-center xl:justify-between xl:items-center">
                            {isObjectId(id) ? (
                                <>
                                    <DeleteButton />
                                    <EditButton />
                                </>
                            ) : (
                                <SaveButton onClick={saveMangaDetails} />
                            )}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-1">
                    <img src={`https://uploads.mangadex.org/covers/${mangaInfo.data.manga_id}/${mangaInfo.data.cover_art}`} alt="Cover Image" className="border-4 border-red-300 w-full h-155 mt-14 mx-24 rounded-lg"></img>
                </div>
            </section>
        </>
    );
};

export default ViewManga;
