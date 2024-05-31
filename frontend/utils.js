export const toUpperCase = (string) => string.replace(/\b\w/g, char => char.toUpperCase());

export const isObjectId = (id) => /^[a-f\d]{24}$/i.test(id);

export const checkCoverArt = (coverArt, mangaID) => {
    // const pattern1 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    const pattern2 = /^\d+_.+$/;


    if (coverArt == null || coverArt == '')
    {
        return `https://via.placeholder.com/400x500?text=No+Image`;
    }
    else if (pattern2.test(coverArt))
    {
        return `/img/mangaImg/${coverArt}`;
    }
    else
    {
        return `https://uploads.mangadex.org/covers/${mangaID}/${coverArt}`;
    }
}