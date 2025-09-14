import { Router } from 'express';
import { getRestaurantController } from '../controller/restaurant.mjs'

const router = Router();

router.get('/v1/restaurant/:restaurantId', getRestaurantController);

export default router;