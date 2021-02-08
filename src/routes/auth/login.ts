import { Router } from 'express';
import { loginValidation } from '../../validations';
import User from '../../model/User';
import bcrypt from 'bcryptjs';

const LoginRouter = Router();
LoginRouter.post('/login', async (req, res) => {
  const errors = loginValidation(req.body);
  if (errors) {
    return res.status(400).send(errors);
  }

  // Check if Email currect
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ message: 'Email or password is wrong' });
  }

  // @ts-ignore
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send({ message: 'Email or password is wrong p' });
  }

  return res.send('ok');
});

export default LoginRouter;
