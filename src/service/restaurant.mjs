import { getRestaurant } from "../model/restaurant.mjs";
import { NotFoundError } from "../handler/handler.mjs"

async function getRestaurantById(restaurantId) {
	try {
		const restaurant = await getRestaurant(restaurantId);

		if (restaurant.rows.length === 0) {
			throw new NotFoundError(`Restaurant not found with ID: ${restaurantId}`);
		}

		return {
			data: restaurant.rows[0]
		}
	} catch (error) {
		if (error.code === '22P02') {
			throw new NotFoundError(`UUID type ID error : ${restaurantId}`);
		}
		throw error;
	}
}

export { getRestaurantById }