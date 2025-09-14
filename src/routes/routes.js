import { Router } from 'express';
import { getRestaurantController } from '../controller/restaurant.mjs'

const router = Router();

router.get('/v1/restaurant/:restaurantId', getRestaurantController);

router.post('/v1/restaurant', (req, res) => {
	req.body;
	res.send('Create restaurant');
});

router.put('/v1/restaurant/:restaurantId', (req, res) => {
	const { restaurantId } = req.params;
	req.body;
	res.send('Update restaurant');
});

router.delete('/v1/restaurant/:restaurantId', (req, res) => {
	const { restaurantId } = req.params;
	res.send('Delete restaurant');
});

export default router;