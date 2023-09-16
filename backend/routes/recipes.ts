import { Router } from 'express';
import validateJWT from '../middlewares/validateJWT';
import { check } from 'express-validator';
import {
	createRecipe,
	getRecipe,
	getRecipes,
	updateRecipe,
	deleteRecipe,
} from '../controllers/recipes';

const router = Router();

router.get('/', validateJWT, getRecipes);

router.get('/:id', validateJWT, getRecipe);

router.post(
	'/',
	[validateJWT, check('name', 'The name is required').not().isEmpty()],
	createRecipe,
);

router.put('/:id', validateJWT, updateRecipe);

router.delete('/:id', validateJWT, deleteRecipe);

export default router;
