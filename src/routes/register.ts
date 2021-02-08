import { Router } from 'express';
import User from '../model/User';
import { registerValidation } from '../validations';
import bcrypt from 'bcryptjs';
const router = Router();

router.post('/register', async (req, res) => {
  // Validate User
  const errors = registerValidation(req.body);
  if (errors) {
    return res.status(400).send(errors);
  }

  // Check if user already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send({ email: '"email" already exist' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

  // Create User Model
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    // Save User
    const savedUser = await user.save();
    res.send(savedUser.toJSON());
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

export default router;
