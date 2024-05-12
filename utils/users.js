import dbClient from "./db";
import {createHash} from "crypto";

export default class Users {
    static usersCollection = dbClient.db.collection('users');

    static async addUser(email, password){
        const hash = createHash('sha1');
        hash.update(password);
        const hashedPassword = hash.digest('hex');

        const doc = { email, password: hashedPassword };
        await Users.usersCollection.insertOne(doc);
    }

    static async getUser(email){
        const user = await Users.usersCollection.findOne({ email }, { projection: { _id: 1, email: 1 } });
        return user
    }
}
