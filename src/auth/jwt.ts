import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JWTPayload {
  id: number;
  username: string;
  vocation: string;
  level: number;
}

const secret = process.env.JWT_SECRET as string;

function createToken(payload: JWTPayload) {
  const config: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, config);
  return token;
}

export default createToken;