import mongoose from 'mongoose';


const { Schema } = mongoose;


const MangaSchema = new Schema({
    manga_id: {
        type: String,
        required: false,
        trim: true,
        default: ""
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    chapters: {
        type: String,
        required: false,
        trim: true,
        default: "Unknown"
    },
    genre: {
        type: [String],
        required: true,
        trim: true
    },
    manga_status: {
        type: String,
        required: true,
        trim: true
    },
    manga_state: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: [String],
        required: true,
        trim: true,
        default: "Unknown"
    },
    year_published: {
        type: Number,
        required: false,
        trim: true,
        default: null
    },
    cover_art: {
        type: String,
        required: false,
        trim: true,
        default: ""
    }
}, { timestamps: true });


const MangaModel = mongoose.model('mangas', MangaSchema);



export default MangaModel;