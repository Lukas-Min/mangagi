//* THIS FILE CONTAINS THE APIs (custom and 3rd party)
import { checkMandatoryField, checkStringField, checkNumberField } from '../../utils.js';
// import MangaModel from '../models/manga_model.js';

const searchMangaById = async (req, res, next) => {

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

        const genreTags = mangaData.data.attributes.tags
        .filter(tag => tag.attributes.group === "genre")
        .map(tag => tag.attributes.name.en);

        const authorUrl = `https://api.mangadex.org/author/${mangaData.data.relationships[0].id}`;
        const authorResponse = await fetch(authorUrl);
        const authorData = await authorResponse.json();

        const coverArtUrl = `https://api.mangadex.org/cover/${mangaData.data.relationships[2].id}`
        const coverArtResponse = await fetch(coverArtUrl);
        const coverArtData = await coverArtResponse.json();

        return res.status(200).send({
            successful: true,
            message: "Manga data fetched successfully.",
            manga_id: mangaData.data.id,
            title: mangaData.data.attributes.title.en,
            description: mangaData.data.attributes.description.en,
            genre: genreTags,
            manga_status: mangaData.data.attributes.status,
            manga_state: mangaData.data.attributes.state,
            author: authorData.data.attributes.name,
            year_published: mangaData.data.attributes.year,
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

export default { 
    searchMangaById,

}