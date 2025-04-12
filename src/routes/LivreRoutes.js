import express, { request, response } from "express";
import { getAllLivres } from "../services/LivreServices.js";
import * as livreController from "../controllers/LivreController.js"
const LivreRouter = express.Router();

LivreRouter.get('/',livreController.getAll);
LivreRouter.get('/:id',livreController.getLivreById)
LivreRouter.post('/create',livreController.store)
LivreRouter.put('/update/:isbn',livreController.updateLivre)
LivreRouter.delete('/delete/:isbn',livreController.deleted)

export default LivreRouter;