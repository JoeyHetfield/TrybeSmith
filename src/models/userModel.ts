import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces';

async function createUser(user: User): Promise<User> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: User = { username, vocation, level, password, id };
  return newUser;
}

export default {
  createUser,
};