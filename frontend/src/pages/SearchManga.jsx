import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchManga = () => {
    const [mangaInfo, setMangaInfo] = useState('');
    const [mangaResults, setMangaResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (mangaInfo === '') {
            setMangaResults([]);
            setHasSearched(false);
            return;
        }

        const fetchData = async () => {
            try {
                const baseUrl = 'https://api.mangadex.org';
                const response = await axios({
                    method: 'GET',
                    url: `${baseUrl}/manga`,
                    params: {
                        title: mangaInfo
                    }
                });

               

                setMangaResults(response.data.data);
                setHasSearched(true);

                
            } catch (error) {
                console.error(error);
                setMangaResults([]);
                setHasSearched(true);
            }
        };

        fetchData();
    }, [mangaInfo]);

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        name='mangaInfo'
                        value={mangaInfo} 
                        onChange={(e) => setMangaInfo(e.target.value)}
                        type="search" 
                        id="default-search" 
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Manga Title" 
                        required 
                    />
                    {hasSearched && (
                        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 max-h-60 overflow-y-auto">
                            {mangaResults.length > 0 ? (
                                mangaResults.slice(0, 5).map(manga => (
                                    <a 
                                        key={manga.id} 
                                        href={`https://mangadex.org/title/${manga.id}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block p-4 border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                                    >
                                        <div className="flex items-center">
                                            <img src={manga.attributes.posterImage?.medium} alt={manga.attributes.title.en} className="w-10 h-10 rounded-lg mr-4"/>
                                            <span className="text-gray-900 dark:text-white">{manga.attributes.title.en}</span>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div className="p-4 text-gray-900 dark:text-white">No manga found</div>
                            )}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default SearchManga;
