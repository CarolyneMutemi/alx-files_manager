import Users from '../utils/users';

export default class UsersController {
  static async postNew(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    let user = await Users.getUser(email)

    if (user) {
      return res.status(400).json({ error: 'Already exist' });
    }

    await Users.addUser(email, password)
    user = await Users.getUser(email)

    return res.status(201).json(user);
  }
}
