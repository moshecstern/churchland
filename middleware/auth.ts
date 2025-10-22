import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  user: {
    id: string;
  };
}

interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

export default function (req: AuthRequest, res: Response, next: NextFunction): Response | void {
  const jwtSecret = process.env.jwtSecret;

  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  if (!jwtSecret) {
    return res.status(500).json({ msg: 'Server configuration error' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}
