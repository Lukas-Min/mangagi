import express from 'express';
import mangaController from '../controllers/manga_controller.js';

const router = express.Router();

//* POST


//* GET
router.get('/:mangaId', mangaController.searchMangaById);

//* PUT


//* DELETE



export default router;