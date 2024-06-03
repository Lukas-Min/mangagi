import axios from 'axios';

// UTILS
import { isObjectId } from '../../utils';

// HOOKS
import { useQuery } from '@tanstack/react-query';

export const useViewMangaData = (id) => {
    
    return useQuery({

        queryFn: async () => {
            
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/${isObjectId(id) ? `find/${id}` : id}`);

            if (!response.ok) 
            {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            return data;
            
        },
        queryKey: ['mangaInfo', id],
    });
};


export const useMangaSearch = (mangaInfo) => {

    return useQuery({
        queryKey: ['mangaResults', mangaInfo],
        queryFn: async () => {
            if (!mangaInfo) return [];

            try 
            {
                const baseUrl = 'https://api.mangadex.org';
                const url = `${baseUrl}/manga`;
                const response = await axios.get(url, {
                    params: {
                        title: mangaInfo
                    }
                });

    
                if (response.status !== 200) 
                {
                    throw new Error('Network response was not ok');
                }
    

                const coverArtId = response.data.data
                .map(manga => manga.relationships)
                .flat()
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


                const mangaData = combinedData.map(item => ({
                    id: item.id,
                    name: item.attributes.title.en,
                    fileName: item.fileName
                }));

                return mangaData;

            } 
            catch (error) 
            {
                throw new Error('Error fetching manga data');
            }
        }
    });
};


export const useViewAllMangaData = () => {

    return useQuery({
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/find/all`);

            if (response.status === 404) {
                throw new Error('Manga data not found');
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            const data = await response.json();

            console.log(data);
            return data;
        },
        queryKey: ['mangaData'],
    });
    
};
