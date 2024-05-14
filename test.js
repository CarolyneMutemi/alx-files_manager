import redisClient from './utils/redis';
import dbClient from './utils/db';

//const auth = Buffer.from('Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=', 'base64').toString();
//const pattern = /:(.+)/;
//const splitAuthData = auth.split(pattern);
//const userName = splitAuthData[0];
//const password = splitAuthData[1];
//
//console.log(userName, password);

(async () => {
const users = dbClient.db.collection('users');
const userObject = await users.findOne({ email: 'bob@dylan.com' }, { projection: { _id: 1, email: 1 } });
console.log(userObject)
const user = { id: userObject._id, email: userObject.email };
})();

// (async () => {
// redisClient.del('auth_8b83aed4-48bc-4b15-ab51-cfd843c3494b')})();

// const hey = undefined

// console.log(hey == undefined)
