import { Request, Response } from 'express';
import { Product } from '../interfaces';
import productService from '../services/productService';

async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data } = await productService.createProduct(product);
  res.status(status).json(data);
}

async function listAllProducts(req: Request, res: Response) {
  const { status, data } = await productService.listAllProducts();
  res.status(status).json(data);
}

export default {
  createProduct,
  listAllProducts,
};