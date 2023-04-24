import { User } from '../interfaces';
import userModel from '../models/userModel';
import createToken from '../auth/jwt';

async function createUser(user: User) {
  const data = await userModel.createUser(user);

  const token = createToken(data);
  return token;
}

export default {
  createUser,
};