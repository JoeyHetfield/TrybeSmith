import { Product } from '../interfaces';
import productModel from '../models/productModel';

async function createProduct(product: Product) {
  const data = await productModel.createProduct(product);
  return { status: 201, data };
}

async function listAllProducts() {
  const data = await productModel.listAllProducts();
  return { status: 200, data };
}

export default {
  createProduct,
  listAllProducts,
};
