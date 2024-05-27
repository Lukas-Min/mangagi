import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const MangaCover = () => {
    const { data: mangaData, isLoading, error } = useQuery({
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/find/all`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.data._id);
            return data;
        },
        queryKey: ['mangaData'],
    });

    if (isLoading) return <h1>Loading...</h1>; // U can use this to create a loader...
    if (error) return <h1>Error: {error.message}</h1>; // U can use this to return a specific error if fetching data from db using the API failed.


    return (

        <div className='flex justify-center'>
            {mangaData.data.length === 0 ? ( // ? To see the message, change the condition to -> mangaData.data.length !== 0
                <h1>No Manga Found in DB</h1> // TODO: fix the design and layout of this message. Kayo na bahala kung anong itsura.
            ) : (
                <>
                    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-4 gap-y-4'>
                        {mangaData.data.map((manga, index) => (
                            <Link key={index} to={`/view-manga/${manga._id}`} className="border border-rose rounded-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <img
                                    src={manga.cover_art ? `https://uploads.mangadex.org/covers/${manga.manga_id}/${manga.cover_art}` : `https://via.placeholder.com/400x500?text=No+Image`}
                                    alt={manga.title ? manga.title : `Image ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-2 text-white pt-[70%] bg-gradient-to-t from-black to-transparent">
                                    <h3 className="font-bold mb-1">{manga.title ? manga.title : 'Title not available'}</h3>
                                </div>
                                <div className="absolute top-0 left-0 w-full p-2 text-white">
                                    <span className='bg-blush rounded-lg p-1 px-3 font-bold'>{manga.chapters ? `${manga.chapters}` : 'Chapters not available'}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>

    );

}

export default MangaCover;
