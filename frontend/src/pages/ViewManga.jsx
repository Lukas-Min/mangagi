import React from "react";
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { toUpperCase, isObjectId } from '../../utils';

// Components
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import SaveButton from '../components/SaveButton';

const ViewManga = () => {
    const { id } = useParams();

    const { data: mangaInfo, isLoading, error } = useQuery({
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/${isObjectId(id) ? `find/${id}` : id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
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
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-8  px-[10vw] lg:px-[15vw] pb-16">
            <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start p-5">
                <div className="w-full">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left py-2">{mangaInfo.data.title}</h1>

                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-x-3 text-center text-nowrap">
                        {mangaInfo.data.author.map((author, index) => (
                            <Link to={`/${author}`} key={index} className="text-baseline sm:text-lg py-2 lg:py-3 lg:xl text-start col-span-1 xs:col-span-3">
                                <h1 className="p-2">Author: {author}</h1>
                            </Link>
                        ))}

                        <Link to={`/year/${mangaInfo.data.year_published}`} className="bg-raisin rounded-lg">
                            <h1 className="p-2">Published: {mangaInfo.data.year_published || "Year unknown"}</h1>
                        </Link>

                        <Link to={`/status/${mangaInfo.data.manga_status}`} className="bg-raisin rounded-lg">
                            <h1 className="p-2">Status: {toUpperCase(mangaInfo.data.manga_status)}</h1>
                        </Link>

                        <Link to={`state/${mangaInfo.data.manga_state}`} className="bg-raisin rounded-lg">
                            <h1 className="p-2">State: {toUpperCase(mangaInfo.data.manga_state)}</h1>
                        </Link>
                    </div>

                    <h1 className="text-2xl font-bold py-1 md:py-2 text-left">Tags</h1>

                    <div className="flex flex-wrap lg:justify-start gap-2 py-2">
                        {mangaInfo.data.genre.map((tag, index) => (
                            <Link to={`/tags/${tag}`} key={index} className="py-2 px-3 rounded-xl bg-blush text-licorice">
                                <h1 className="text-center font-bold">{tag}</h1>
                            </Link>
                        ))}
                    </div>

                    <div className="text-justify py-5">
                        {mangaInfo.data.description ? (
                            mangaInfo.data.description.split('\n').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph}
                                    <p> </p>
                                </React.Fragment>
                            ))
                        ) : (
                            "No available description."
                        )}
                    </div>


                    <div className="flex justify-between my-2 items-center">
                        {isObjectId(id) ? (
                            <>
                                <EditButton />
                                <DeleteButton />
                            </>
                        ) : (
                            <SaveButton onClick={saveMangaDetails}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:mt-5">
                <div className="max-h-full">
                    <img
                        src={`https://uploads.mangadex.org/covers/${mangaInfo.data.manga_id}/${mangaInfo.data.cover_art}`}
                        alt="Cover Image"
                        className="border-4 border-red-300 w-full h-auto rounded-lg max-h-[30vh] md:max-h-[40vh]  lg:max-h-full"
                    />
                </div>
            </div>


        </section>
    );
};

export default ViewManga;
