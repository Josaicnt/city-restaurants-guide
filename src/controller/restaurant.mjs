import { json } from 'express';
import { getRestaurantById } from '../service/restaurant.mjs'

export async function getRestaurantController(req, res) {
	const { restaurantId } = req.params;
	const restaurant = await getRestaurantById(restaurantId);

	res.json(restaurant)
}



