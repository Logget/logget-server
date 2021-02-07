import { Router } from 'express';
import User from '../model/User';
import { registerValidation } from '../validations';

const router = Router();

router.post('/register', async (req, res) => {
  const errors = registerValidation(req.body);
  if (errors) {
    return res.status(400).send(errors);
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser.toJSON());
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

export default router;
