import { Request, Response } from 'express';
import { User } from '../interfaces';
import userService from '../services/userService';

async function createUser(req: Request, res: Response) {
  const user = req.body as User;
  const createdUser = await userService.createUser(user);
  res.status(201).json({ token: createdUser });
}

export default {
  createUser,
};
