import { Link } from 'react-router-dom';
import { useMangaSearch } from '../hooks/useMangaData';
import { useState } from 'react';

const SearchManga = () => {
    const [mangaInfo, setMangaInfo] = useState('');
    const { data: mangaResults, isLoading, isError } = useMangaSearch(mangaInfo);

    return (
        <div className="max-w-md mx-auto mt-[10vh]">
            <h1 className='text-center font-extrabold text-4xl mb-6 text-nowrap'>MangaGing Search Bar</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-licorice sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-licorice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        name='mangaInfo'
                        value={mangaInfo}
                        onChange={(e) => setMangaInfo(e.target.value)}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-licorice border border-rose rounded-lg bg-gray-50 focus:ring-amaranth focus:border-amaranth"
                        placeholder="Manga Title"
                        required
                    />
                    {isLoading && (
                        <div className="absolute z-30 w-full mt-2 flex justify-center">
                            <h1>Loading...</h1>
                        </div>
                    )}
                    {isError && (
                        <div className="absolute z-30 w-full mt-2 flex justify-center">
                            <h1>Error: {isError.message}</h1>
                        </div>
                    )}
                    {(mangaResults && mangaResults.length > 0) ? (
                        <div className="absolute z-30 w-full mt-2 bg-raisin border border-rose rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {mangaResults.map(manga => (
                                <Link
                                    key={manga.id} to={`/view-manga/${manga.id}`}
                                    rel="noopener noreferrer"
                                    className="block p-4 border-b border-amaranth hover:bg-amaranth"
                                >
                                    <div className="flex items-center">
                                        <img src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.fileName}`} alt={manga.name} className="w-30 h-40 rounded-lg mr-4" />
                                        <span className="text-rose font-bold">{manga.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="absolute z-30 w-full mt-2 flex justify-center">
                            {mangaInfo && mangaResults && mangaResults.length === 0 && (
                                <h1>No manga found</h1>
                            )}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default SearchManga;
