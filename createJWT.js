const jwt = require('jsonwebtoken');
require('dotenv').config();

let duration = 25 * 365.25 * 24 * 60 * 60;
const secret = process.env.JWT_SECRET;

let token = jwt.sign({ 
	iss: 'jwt-tutorial', 
	sub: 'USER_ID', 
	exp: Math.floor(Date.now() / 1000) + duration,
	roles: ['student']
}, secret);

console.log('JWT :', token);
