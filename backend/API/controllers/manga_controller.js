//* THIS FILE CONTAINS THE APIs (custom and 3rd party)
import { checkMandatoryField, checkStringField, containsCharacter, checkMandatoryArrayField, checkStringType, checkNumberField } from '../../utils.js';
import MangaModel from '../models/manga_model.js';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const searchMangaById = async (req, res, next) => { //* This is a custom API that connects to MangaDex API

    let { mangaId } = req.params;

    try {

        if (!checkMandatoryField(mangaId)) {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not defined."
            })
        }

        if (!checkStringField(mangaId)) {

            return res.status(400).send({
                successful: false,
                message: "Manga id is not a string."
            })

        }

        const mangaUrl = `https://api.mangadex.org/manga/${mangaId}`;
        const response = await fetch(mangaUrl);

        if (!response.ok) {
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

        const data = {
            manga_id: mangaData.data.id,
            title: mangaData.data.attributes.title.en || mangaData.data.attributes.altTitles[2].en,
            description: mangaData.data.attributes.description.en,
            chapters: lastChapter && (lastChapter.chapter != undefined && lastChapter.chapter != null && lastChapter.chapter != "") ? lastChapter.chapter : "Unknown",
            genre: genreTags,
            manga_status: mangaData.data.attributes.status,
            manga_state: mangaData.data.attributes.state,
            author: authorNamesArray.length != 0 ? authorNamesArray : "Unknown",
            year_published: mangaData.data.attributes.year,
            cover_art: coverArtData.data.attributes.fileName
        }

        return res.status(200).send({
            successful: true,
            message: "Manga data fetched successfully.",
            data: data
        })

    }
    catch (err) {
        return res.status(500).send({
            successful: false,
            message: 'Error fetching manga data',
            data: err.message
        })
    }

};


const deleteMangabyId = async (req, res, next) => { //* This API deletes manga data according to its oId (_id)
    let { id } = req.params;

    try {
        if (!checkMandatoryField(id)) {
            return res.status(400).send({
                successful: false,
                message: "Object id is not defined."
            })
        }

        if (!containsCharacter(id, '-')) {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not allowed."
            })
        }

        if (!checkStringField(id)) {
            return res.status(400).send({
                successful: false,
                message: "Object id is not a string."
            })
        }

      
        const manga = await MangaModel.findById(id);

      
        if (!manga) {
            return res.status(400).send({
                successful: false,
                message: "Error deleting manga data. Manga data does not exist"
            })
        }


        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const currentDir = __dirname;

        const uploadFolder = path.resolve(__dirname, '..', '..', '..', 'frontend', 'public', 'img', 'mangaImg');
        
        const imagePath = path.join(uploadFolder, manga.cover_art);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Delete the file
        }

        const deleteManga = await MangaModel.findByIdAndDelete(id);

        if (!deleteManga) {
            return res.status(400).send({
                successful: false,
                message: "Error deleting manga data. Manga data does not exist"
            })
        }

        return res.status(200).send({
            successful: true,
            message: "Manga data deleted successfully.",
            uploadFolder: uploadFolder,
            imagePath: imagePath
        })

    } catch (err) {
        return res.status(500).send({
            successful: false,
            message: 'Error deleting manga data',
            data: err.message
        })
    }
};

const findAllManga = async (req, res, next) => { //* This fetches all existing manga data in the database

    try {
        const allManga = await MangaModel.find();

        if (allManga.length == 0) {
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
    catch (err) {
        return res.status(500).send({
            successful: false,
            message: 'Error finding all manga data',
            data: err.message
        })
    }

};

const addManga = async (req, res, next) => { //* This adds the manga data in the database
    const { manga_id, title, description, chapters, genre, manga_status, manga_state, author, year_published, cover_art, cover_art_src} = req.body;

    
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

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const currentDir = __dirname;

        const rootDir = path.resolve(currentDir, '..', '..', '..', 'frontend');
        
        const uploadFolder = path.join(rootDir, 'public', 'img', 'mangaImg');


        const base64Data = cover_art_src.replace(/^data:image\/\w+;base64,/, '');
        const binaryData = Buffer.from(base64Data, 'base64');


        if (!fs.existsSync(uploadFolder)) {
            fs.mkdirSync(uploadFolder, { recursive: true });
        }


        const filename = `${Date.now()}_${cover_art}`;
        const imagePath = path.join(uploadFolder, filename);

        fs.writeFileSync(imagePath, binaryData);


        const newManga = new MangaModel({
            manga_id,
            title,
            description,
            chapters,
            genre,
            manga_status,
            manga_state,
            author,
            year_published,
            cover_art: filename
        });

        await newManga.save();


        return res.status(200).send({
            successful: true,
            message: 'Manga added successfully.',
            data: newManga,
            rootDir: rootDir,
            uploadFolder: uploadFolder,
            imagePath: imagePath
        });

    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).send({
            successful: false,
            message: 'Error adding manga',
            data: err.message
        });
    }
}

const viewDetailsByObjId = async (req, res, next) => { //* This fetches existing manga data in the local database
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).send({
                successful: false,
                message: "Object id is not defined."
            });
        }

        const manga = await MangaModel.findById(id);

        if (!manga) {
            return res.status(404).send({
                successful: false,
                message: "Manga data does not exist."
            });
        }

        return res.status(200).send({
            successful: true,
            message: "Manga data fetched successfully.",
            data: manga
        });
    } catch (error) {
        return res.status(500).send({
            successful: false,
            message: "An error occurred while fetching manga data.",
            error: error.message
        });
    }
};

// TODO: Add chapters to request body.
const updateMangaDetail = async (req, res, next) => { //* This API updates manga data according to its oId (_id)

    let { id } = req.params;
    let { manga_id, title, description, chapters, genre, manga_status, manga_state, author, year_published, cover_art } = req.body;

    try {

        if (!checkMandatoryField(id)) {
            return res.status(400).send({
                successful: false,
                message: "Id is not defined."
            })
        }

        if (!checkStringType(manga_id)) {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not of string data type."
            })
        }

        if (!checkMandatoryField(title)) {
            return res.status(400).send({
                successful: false,
                message: "Title is not defined."
            })
        }

        if (!checkMandatoryField(description)) {
            return res.status(400).send({
                successful: false,
                message: "Description is not defined."
            })
        }

        if(!checkStringType(chapters))
        {
            return res.status(400).send({
                successful: false,
                message: "Manga id is not of string data type."
            })
        }

        if(!checkMandatoryArrayField([genre]))
        {
            return res.status(400).send({
                successful: false,
                message: "Genre is not defined."
            })
        }

        if (!checkMandatoryField(manga_status)) {
            return res.status(400).send({
                successful: false,
                message: "Manga status is not defined."
            })
        }

        if (!checkMandatoryField(manga_state)) {
            return res.status(400).send({
                successful: false,
                message: "Manga state is not defined."
            })
        }

        if(!checkMandatoryArrayField([author]))
        {
            return res.status(400).send({
                successful: false,
                message: "Genre is not defined."
            })
        }

        if(!checkNumberField(year_published))
        {
            return res.status(400).send({
                successful: false,
                message: "Year published is not of number data type."
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
                chapters,
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

        if (!updateManga) {
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
    catch (err) {
        return res.status(500).send({
            successful: false,
            message: 'Error updating manga data',
            data: err.message
        })
    }

};

const saveManga = async (req, res, next) => { //* This saves the manga data from the MangaDex API into the MongoDB cluster
    const { manga_id, title, description, chapters, genre, manga_status, manga_state, author, year_published, cover_art } = req.body;

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
            manga_id,
            title,
            description,
            chapters,
            genre,
            manga_status,
            manga_state,
            author,
            year_published,
            cover_art
        });

        await newManga.save();

        return res.status(200).send({
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
}

export default {
    searchMangaById,
    deleteMangabyId,
    findAllManga,
    addManga,
    updateMangaDetail,
    viewDetailsByObjId,
    saveManga
}