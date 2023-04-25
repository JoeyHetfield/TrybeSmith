import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function listAllOrders(req: Request, res: Response) {
  const { status, data } = await orderService.listAllOrders();
  res.status(status).json(data);
}

export default {
  listAllOrders,
};