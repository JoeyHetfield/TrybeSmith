import { Request, Response } from 'express';
import { User } from '../interfaces';
import userService from '../services/userService';

async function createUser(req: Request, res: Response) {
  const user = req.body as User;
  const { status, data } = await userService.createUser(user);
  res.status(status).json(data);
}

export default {
  createUser,
};
