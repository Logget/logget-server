import { User } from './model/User';

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
