import connection from './connection';
import { User } from '../interfaces';

async function login(username: string): Promise<User[]> {
  const [query] = await connection.execute(`SELECT * FROM Trybesmith.users 
  WHERE username = ?`, [username]);

  return query as User[];
}

export default {
  login,
};
