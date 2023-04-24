import { Router } from 'express';
import productController from '../controllers/productController';
import userController from '../controllers/userController';

const router = Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.listAllProducts);
router.post('/users', userController.createUser);

export default router;