import redisClient from './utils/redis';
import dbClient from './utils/db';

console.log(dbClient.nbUsers())
console.log(dbClient.nbFiles())
