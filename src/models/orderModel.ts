import connection from './connection';
import { Order } from '../interfaces';

async function listAllOrders(): Promise<Order[]> {
  const [query] = await connection.execute(`SELECT O.id, O.user_id as userId, 
  JSON_ARRAYAGG(P.id) AS productsIds 
  FROM Trybesmith.orders as O 
  INNER JOIN Trybesmith.products as P 
  ON O.id = P.order_id
  GROUP BY O.id`);

  return query as Order[];
}

export default {
  listAllOrders,
};