import express from 'express';
import mangaController from '../controllers/manga_controller.js';

const router = express.Router();

//* POST
router.post('/add', mangaController.addManga);

//* GET
router.get('/find/all', mangaController.findAllManga);
router.get('/:mangaId', mangaController.searchMangaById);


//* PUT


//* DELETE
router.delete('/:id', mangaController.deleteMangabyId);


export default router;