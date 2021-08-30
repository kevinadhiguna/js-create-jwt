const jwt = require('jsonwebtoken');
require('dotenv').config();

let duration = 25 * 365.25 * 24 * 60 * 60;
const secret = process.env.JWT_SECRET;

// Generate payload
let token = jwt.sign({ 
	iss: 'jwt-tutorial', // Issuer (who created and signed this token)
	sub: 'USER_ID', // Subject (whom the token refers to)
	exp: Math.floor(Date.now() / 1000) + duration, // Token expiry date
	roles: ['student']
}, secret);

console.log("-- Generated JWT --");
console.log('JWT :', token);

let decoded = jwt.decode(token, { complete: true });

console.log("\n-- Decoded JWT --");
console.log("Header :", decoded.header);
console.log("Payload :", decoded.payload);
console.log("Signature :", decoded.signature); // Header + Payload generate signature
