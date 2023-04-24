import { Router } from 'express';
import productController from '../controllers/productController';

const router = Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.listAllProducts);

export default router;