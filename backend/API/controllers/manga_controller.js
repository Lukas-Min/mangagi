//* THIS FILE CONTAINS THE APIs (custom and 3rd party)
import { checkMandatoryField, checkStringField, containsCharacter, checkMandatoryArrayField, checkStringType } from '../../utils.js';
import MangaModel from '../models/manga_model.js';

const searchMangaById = async (req, res, next) => { //* This is a custom API that connects to MangaDex API

    let { mangaId } = req.params;

    try
    {

        if (!checkMandatoryField(mangaId)) 
        {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not defined."
            })
        }

        if (!checkStringField(mangaId))
        {

            return res.status(400).send({
                successful: false,
                message: "Manga id is not a string."
            })

        }

        const mangaUrl = `https://api.mangadex.org/manga/${mangaId}`;
        const response = await fetch(mangaUrl);

        if (!response.ok)
        {
            return res.status(response.status).send({
                successful: false,
                message: "Failed to fetch manga data. Id does not exist"
            })
        }

        const mangaData = await response.json();

        const chapterUrl = `https://api.mangadex.org/manga/${mangaId}/aggregate`;
        const chapterResponse = await fetch(chapterUrl);
        const chapterData = await chapterResponse.json();

        const allChapters = Object.values(chapterData.volumes).map(volume => Object.values(volume.chapters)).flat();
        const lastChapter = allChapters[allChapters.length - 1];

        // console.log(`Total Chapter: ${lastChapter.chapter}`);

        const genreTags = mangaData.data.attributes.tags
        .filter(tag => tag.attributes.group === "genre")
        .map(tag => tag.attributes.name.en);

        const authorsIds = mangaData.data.relationships
        .filter(relationship => relationship.type === "author")
        .map(relationship => relationship.id);

        // console.log(`Authors: ${authorsIds}`);

        const authorPromises = authorsIds.map(async authorId => {
            const authorUrl = `https://api.mangadex.org/author/${authorId}`;
            const authorResponse = await fetch(authorUrl);
            const authorData = await authorResponse.json();
            return authorData;
        });

        const authorNamesArray = await Promise.all(authorPromises)
        .then(responses => {
            return responses.map(response => response.data.attributes.name);
        });

        // console.log(`Author name count: ${authorNamesArray.length}`);

        const mangaCover = mangaData.data.relationships
        .filter(relationship => relationship.type === "cover_art")
        .map(relationship => relationship.id);

        const coverArtUrl = `https://api.mangadex.org/cover/${mangaCover}`
        const coverArtResponse = await fetch(coverArtUrl);
        const coverArtData = await coverArtResponse.json();

        return res.status(200).send({
            successful: true,
            message: "Manga data fetched successfully.",
            manga_id: mangaData.data.id,
            title: mangaData.data.attributes.title.en || mangaData.data.attributes.altTitles[2].en,
            description: mangaData.data.attributes.description.en,
            chapters: lastChapter.chapter != "" || lastChapter.chapter != null ? lastChapter.chapter : "Unknown",
            genre: genreTags,
            manga_status: mangaData.data.attributes.status,
            manga_state: mangaData.data.attributes.state,
            author: authorNamesArray.length != 0 ? authorNamesArray : "Unkown",
            year_published: mangaData.data.attributes.year != null ? mangaData.data.attributes.year : "Unknown",
            cover_art: coverArtData.data.attributes.fileName
        })

    }
    catch (err)
    {
        return res.status(500).send({
            successful: false,
            message: 'Error fetching manga data',
            data: err.message
        })
    }

};


const deleteMangabyId = async (req, res, next) => { //* This API deletes manga data according to its oId (_id)

    let { id } = req.params;

    try
    {

        if (!checkMandatoryField(id)) 
        {
            return res.status(400).send({
                successful: false,
                message: "Object id is not defined."
            })
        }

        if (!containsCharacter(id, '-'))
        {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not allowed."
            })
        }

        if (!checkStringField(id))
        {

            return res.status(400).send({
                successful: false,
                message: "Object id is not a string."
            })

        }


        const deleteManga = await MangaModel.findByIdAndDelete(id);


        if(!deleteManga)
        {

            return res.status(400).send({
                successful: false,
                message: "Error deleting manga data. Manga data does not exist"
            })

        }

        return res.status(200).send({
            successful: true,
            message: "Manga data deleted successfully."
        })

    }
    catch (err)
    {
        return res.status(500).send({
            successful: false,
            message: 'Error deleting manga data',
            data: err.message
        })
    }

};

const findAllManga = async (req, res, next) => { //* This fetches all existing manga data in the database

    try 
    {
        const allManga = await MangaModel.find();

        if (allManga.length == 0) 
        {
            return res.status(404).send({
                successful: false,
                message: 'No manga data found'
            })
        }

        return res.status(200).send({
            successful: true,
            message: 'Successfully got all manga data',
            data: allManga
        })

    } 
    catch (err) 
    {
        return res.status(500).send({
            successful: false,
            message: 'Error finding all manga data',
            data: err.message
        })
    }

}

const addManga = async (req, res, next) => {
    const { title, description, chapters, genre, manga_status, manga_state, author, year_published, cover_art } = req.body;

    try {
        if (!checkMandatoryField(title)) {
            return res.status(400).send({
                successful: false,
                message: "Title is not defined."
            });
        }

        if (!checkMandatoryField(description)) {
            return res.status(400).send({
                successful: false,
                message: "Description is not defined."
            });
        }

        if (!Array.isArray(genre) || genre.length === 0) {
            return res.status(400).send({
                successful: false,
                message: "Genre must be a non-empty array."
            });
        }

        if (!checkMandatoryField(manga_status)) {
            return res.status(400).send({
                successful: false,
                message: "Manga status is not defined."
            });
        }

        if (!checkMandatoryField(manga_state)) {
            return res.status(400).send({
                successful: false,
                message: "Manga state is not defined."
            });
        }


        const newManga = new MangaModel({
            title,
            description,
            chapters,
            genre,
            manga_status,
            manga_state,
            author,
            year_published
        });

        await newManga.save();

        return res.status(201).send({
            successful: true,
            message: 'Manga added successfully.',
            data: newManga
        });

    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).send({
            successful: false,
            message: 'Error adding manga',
            data: err.message
        });
    }
};
const updateMangaDetail = async (req, res, next) => { //* This API updates manga data according to its oId (_id)

    let { id } = req.params;
    let { manga_id, title, description, genre, manga_status, manga_state, author, year_published, cover_art } = req.body;

    try
    {

        if(!checkMandatoryField(id))
        {
            return res.status(400).send({
                successful: false,
                message: "Id is not defined."
            })
        }

        if(!checkStringType(manga_id))
        {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not of string data type."
            })
        }

        if(!checkMandatoryField(title))
        {
            return res.status(400).send({
                successful: false,
                message: "Title is not defined."
            })
        }

        if(!checkMandatoryField(description))
        {
            return res.status(400).send({
                successful: false,
                message: "Description is not defined."
            })
        }

        if(!checkMandatoryArrayField([genre]))
        {
            return res.status(400).send({
                successful: false,
                message: "Genre is not defined."
            })
        }

        if(!checkMandatoryField(manga_status))
        {
            return res.status(400).send({
                successful: false,
                message: "Manga status is not defined."
            })
        }

        if(!checkMandatoryField(manga_state))
        {
            return res.status(400).send({
                successful: false,
                message: "Manga state is not defined."
            })
        }

        if(!checkStringType(cover_art))
        {
            return res.status(400).send({
                successful: false,
                message: "Cover art is not of string data type."
            })
        }
    
        const updateManga = await MangaModel.findByIdAndUpdate(id, {
            $set: {
                manga_id,
                title,
                description,
                genre,
                manga_status,
                manga_state,
                author,
                year_published,
                cover_art,
                updatedAt: new Date().toISOString()
            },
            $inc: { __v: 1 }
        });

        if(!updateManga)
        {
            return res.status(400).send({
                successful: false,
                message: "Error updating manga data."
            })
        }

        return res.status(200).send({
            successful: true,
            message: "Manga data updated successfully."
        })


    }
    catch (err)
    {
        return res.status(500).send({
            successful: false,
            message: 'Error updating manga data',
            data: err.message
        })
    }

}

export default { 
    searchMangaById,
    deleteMangabyId,
    findAllManga,
    addManga,
    updateMangaDetail,
    
}