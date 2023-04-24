import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces';

async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { name, amount, id };
  return newProduct;
}

export default {
  createProduct,
};