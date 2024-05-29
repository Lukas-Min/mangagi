import { Link } from 'react-router-dom';

// UTILS
import { toUpperCase } from '../../utils';

// HOOKS
import { useViewAllMangaData } from '../hooks/useMangaData';

const MangaCover = () => {
    const { data: mangaData, isLoading, error } = useViewAllMangaData();

    return (
        <div className='flex justify-center'>
            {isLoading && <h1>Loading...</h1>}
            {!isLoading && error && (
                <section className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-10">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blush">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-amaranth md:text-4xl">Error: {error.message}</p>
                    </div>
                </section>
            )}
            
            {!isLoading && !error && (
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
                                <span className='bg-blush rounded-lg p-1 px-3 font-bold'>{manga.chapters ? `${toUpperCase(manga.chapters)}` : 'Chapters not available'}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MangaCover;
