import { Request, Response } from 'express';
import Recipe from '../models/recipe';

export const createRecipe = async (req: Request, res: Response) => {
	const { name, description, ingredients, image } = req.body;

	try {
		const recipe = await Recipe.findOne({ name }).exec();

		if (recipe) {
			return res.status(400).json({
				msg: 'Recipe already exists',
			});
		}

		const data = {
			name,
			description,
			ingredients,
			image,
			user: req.body.user._id,
		};

		const newRecipe = new Recipe(data);
		await newRecipe.save();

		res.status(201).json({ msg: 'Create recipe', data: newRecipe });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};

export const getRecipes = async (req: Request, res: Response) => {
	const user = req.body.user._id;
	try {
		const recipes = await Recipe.find({ user }).exec();
		res.json({ msg: 'Get recipes', recipes });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};

export const getRecipe = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const recipe = await Recipe.findById(id).exec();

		if (!recipe) {
			return res.status(404).json({
				msg: 'Recipe not found',
			});
		}

		res.json({ msg: 'Get recipe', recipe });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};

export const updateRecipe = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { _id, ...recipe } = req.body;

	try {
		const recipeUpdated = await Recipe.findByIdAndUpdate(id, recipe, {
			new: true,
		}).exec();

		if (!recipeUpdated) {
			return res.status(404).json({
				msg: 'Recipe not found',
			});
		}

		res.json({ msg: 'Update recipe', recipeUpdated });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};

export const deleteRecipe = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const recipe = await Recipe.findByIdAndDelete(id).exec();

		if (!recipe) {
			return res.status(404).json({
				msg: 'Recipe not found',
			});
		}

		res.json({ msg: 'Delete recipe', recipe });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};
