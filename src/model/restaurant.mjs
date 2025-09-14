import { connection } from '../config/database.mjs'

export async function getRestaurant(restaurantId) {
	const restaurant = await connection.query(
		'SELECT * from restaurant.restaurant r WHERE id = $1',
		[restaurantId]
	);

	return restaurant;
}