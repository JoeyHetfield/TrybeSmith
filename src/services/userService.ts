import { User } from '../interfaces';
import userModel from '../models/userModel';

async function createUser(user: User) {
  const data = await userModel.createUser(user);
  return { status: 201, data };
}

export default {
  createUser,
};