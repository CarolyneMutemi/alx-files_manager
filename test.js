import redisClient from './utils/redis';
import dbClient from './utils/db';

//const auth = Buffer.from('Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=', 'base64').toString();
//const pattern = /:(.+)/;
//const splitAuthData = auth.split(pattern);
//const userName = splitAuthData[0];
//const password = splitAuthData[1];
//
//console.log(userName, password);

//(async () => {
//const users = dbClient.db.collection('users');
//const userObject = await users.findOne({ email: 'bob@dylan.com' }, { projection: { _id: 1, email: 1 } });
//console.log(userObject)
//const user = { id: userObject._id, email: userObject.email };
//})();

// (async () => {
// redisClient.del('auth_8b83aed4-48bc-4b15-ab51-cfd843c3494b')})();

// const hey = undefined

// console.log(hey == undefined)

const fs = require('fs');
//const imageThumbnail = require('image-thumbnail');
//
//async function createThumbnail(inputPath, outputPath) {
//    try {
//        const options = { width: 100, height: 100, responseType: 'buffer' };
//        
//        const thumbnail = await imageThumbnail(inputPath, options);
//        fs.writeFileSync(outputPath, thumbnail);
//        
//        console.log('Thumbnail created successfully!');
//    } catch (err) {
//        console.error('Error creating thumbnail:', err);
//    }
//}
//
//// Example usage
//const inputPath = 'path/to/your/image.jpg';
//const outputPath = 'path/to/save/thumbnail.jpg';
//
//createThumbnail('image.jpg', 'image2.jpg');


const imageThumbnail = require('image-thumbnail');

(async () => {try {
    const imageBuffer = fs.readFileSync('image.jpg');
    console.log(imageBuffer)

    const thumbnail = await imageThumbnail(imageBuffer);
    console.log(thumbnail);
} catch (err) {
    console.error(err);
}})();

