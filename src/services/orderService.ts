import orderModel from '../models/orderModel';

async function listAllOrders() {
  const data = await orderModel.listAllOrders();
  return { status: 200, data };
}

export default {
  listAllOrders,
};