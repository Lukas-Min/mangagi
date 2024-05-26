import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MangaCover = () => {
    const [mangaData, setMangaData] = useState([]);

    useEffect(() => {
        const fetchMangaData = async () => {
            try {
                const result = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/find/all`);
                const body = await result.json();
                console.log("Response from server:", body);
                if (body.successful && body.data.length > 0) {
                    setMangaData(body.data);
                } else {
                    console.log("No manga data found");
                    setMangaData([]);
                }
            } catch (error) {
                console.error("Error fetching manga data:", error);
                setMangaData([]);
            }
        };
        fetchMangaData();
    }, []);

    return (
        <>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-4 gap-y-4'>
                    {Array.isArray(mangaData) && mangaData.map((manga, index) => (
                        <Link key={index} to={`/view-manga/${manga.id}`} className="border border-rose rounded-lg overflow-hidden relative">
                            <img
                                src={manga.cover_art ? `https://uploads.mangadex.org/covers/${manga.manga_id}/${manga.cover_art}` : `https://via.placeholder.com/400x500?text=No+Image`}
                                alt={manga.title ? manga.title : `Image ${index + 1}`}
                                className="object-cover w-full h-[30vh]"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-2 text-white text-xs sm:text-sm lg:text-base pt-[70%] [text-shadow:_1px_1px_1px_rgb(0_0_0_/_60%)] bg-gradient-to-t from-black to-transparent">
                                <h3 className="font-bold mb-1">{manga.title ? manga.title : 'Title not available'}</h3>
                            </div>
                            <div className="absolute top-0 left-0 w-full p-2 text-white text-xs sm:text-sm lg:text-base [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
                                <span className='bg-blush rounded-lg p-1 px-3 font-bold'>{manga.chapters ? `${manga.chapters}` : 'Chapters not available'}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );


}

export default MangaCover;
