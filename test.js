import redisClient from './utils/redis';

const auth = Buffer.from('Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=', 'base64').toString();
const pattern = /:(.+)/;
const splitAuthData = auth.split(pattern);
const userName = splitAuthData[0];
const password = splitAuthData[1];

console.log(userName, password);

// (async () => {
// redisClient.del('auth_8b83aed4-48bc-4b15-ab51-cfd843c3494b')})();

// const hey = undefined

// console.log(hey == undefined)
