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

                const coverArtId = response.data.data
                    .map(manga => manga.relationships)
                    .flat() // Flatten the array of arrays
                    .filter(relationship => relationship.type === "cover_art")
                    .map(relationship => relationship.id);

                const imageRequests = coverArtId.map(coverArtId => {
                    const imageUrl = `https://api.mangadex.org/cover/${coverArtId}`;

                    return axios.get(imageUrl);
                });

                const imgFileNameResponse = await Promise.all(imageRequests)
                    .then(responses => {
                        return responses.map(response => response.data.data.attributes.fileName);
                    });

                const combinedData = response.data.data.map((manga, index) => ({
                    ...manga,
                    fileName: imgFileNameResponse[index]
                }));

                // console.log(combinedData);

                const mangaData = combinedData.map(item => ({
                    id: item.id,
                    name: item.attributes.title.en,
                    fileName: item.fileName
                }));

                // console.log("Manga names:");
                // mangaData.forEach(manga => {
                //     console.log(manga.fileName);
                // });
                setMangaResults(mangaData);
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
                        className="block w-full p-4 ps-10 text-sm text-licorice border border-blush rounded-lg bg-gray-50 focus:ring-amaranth focus:border-amaranth"
                        placeholder="Manga Title"
                        required
                    />
                    {hasSearched && mangaResults.length > 0 && (
                        <div className="absolute z-20 w-full mt-2 bg-raisin border border-blush rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {mangaResults.map(manga => (
                                <a
                                    key={manga.id}
                                    href={`https://mangadex.org/title/${manga.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 border-b border-amaranth hover:bg-amaranth"
                                >
                                    <div className="flex items-center">
                                        <img src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.fileName}`} alt={manga.name} className="w-30 h-40 rounded-lg mr-4" />
                                        <span className="text-rose font-bold">{manga.name}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                    {hasSearched && mangaResults.length === 0 && (
                        <div className="absolute z-10 w-full mt-2 bg-white border border-blush rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            <div className="p-4 text-rose font-bold">No manga found</div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );

}

export default SearchManga;
