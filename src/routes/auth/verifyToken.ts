import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

function auth(req: Request, res: Response) {
  const token = req.header('auth-token');
  if (!token) res.status(401).send('Access Denied');

  try {
    if (token && process.env.SECRET) {
      req.user = jwt.verify(token, process.env.SECRET);
    }
  } catch (err) {
    res.status(400).send('invalid token');
  }
}

export default auth;
