import { createHash } from 'crypto';
import dbClient from '../utils/db';

export default class UsersController {
  static async postNew(req, res) {
    const { email } = req.body;
    const { password } = req.body;
    const users = dbClient.db.collection('users');

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    if (await users.findOne({ email })) {
      return res.status(400).json({ error: 'Already exist' });
    }

    const hash = createHash('sha1');
    hash.update(password);
    const hashedPassword = hash.digest('hex');

    const doc = { email, password: hashedPassword };
    users.insertOne(doc);

    const user = await users.findOne({ email }, { projection: { _id: 1, email: 1 } });

    return res.status(201).json(user);
  }
}
