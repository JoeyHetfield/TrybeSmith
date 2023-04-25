import { Router } from 'express';
import productController from '../controllers/productController';
import userController from '../controllers/userController';
import orderController from '../controllers/orderController';

const router = Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.listAllProducts);
router.post('/users', userController.createUser);
router.get('/orders', orderController.listAllOrders);

export default router;