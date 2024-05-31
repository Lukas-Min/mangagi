import express from 'express';
import mangaController from '../controllers/manga_controller.js';

const router = express.Router();

//* POST
router.post('/add', mangaController.addManga);
router.post('/save', mangaController.saveManga);

//* GET
router.get('/find/all', mangaController.findAllManga);
router.get('/:mangaId', mangaController.searchMangaById);
router.get('/find/:id', mangaController.viewDetailsByObjId);



//* PUT
router.put('/update/:id', mangaController.updateMangaDetail);

//* DELETE
router.delete('/:id', mangaController.deleteMangabyId);


export default router;