import { Request, Response } from 'express';
import Favourites from '../models/favourites';

export const getFavourites = async (req: Request, res: Response) => {
	const user = req.body.user._id;
	try {
		const favourites = await Favourites.find({ user }).exec();
		res.json({
			ok: true,
			favourites,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};

export const createFavourite = async (req: Request, res: Response) => {
	const { label, image, href, calories, totalTime } = req.body;

	try {
		const favourite = await Favourites.findOne({ label }).exec();

		if (favourite) {
			return res.status(400).json({
				msg: 'Favourite already exists',
			});
		}

		const data = {
			label,
			image,
			href,
			calories,
			totalTime,
			user: req.body.user._id,
		};

		const newFavourite = new Favourites(data);
		await newFavourite.save();

		res.status(201).json({ msg: 'Create favourite', data: newFavourite });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};

export const deleteFavourite = async (req: Request, res: Response) => {
	const id = req.params.id;

	try {
		const favourite = await Favourites.findByIdAndDelete(id).exec();

		if (!favourite) {
			return res.status(404).json({
				msg: 'Favourite not found',
			});
		}

		res.json({
			ok: true,
			msg: 'Favourite deleted',
			favourite,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error' + error,
		});
	}
};
