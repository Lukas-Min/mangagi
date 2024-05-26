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
            {Array.isArray(mangaData) && mangaData.map((manga, index) => (
                <Link key={index} to={`/view-manga/${manga.id}`} className="border border-rose rounded-lg overflow-hidden object-cover w-52 sm:w-64 md:w-64">
                    <img
                        src={manga.cover_art ? `https://uploads.mangadex.org/covers/${manga.manga_id}/${manga.cover_art}` : `https://via.placeholder.com/400x500?text=No+Image`}
                        alt={manga.title ? manga.title : `Image ${index + 1}`}
                        className="w-auto h-auto"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{manga.title ? manga.title : 'Title not available'}</h3>
                        <p className="">{manga.chapters ? `Chapters ${manga.chapters}` : 'Chapters not available'}</p>
                    </div>
                </Link>
            ))}
        </>
    );
    
    
}

export default MangaCover;
