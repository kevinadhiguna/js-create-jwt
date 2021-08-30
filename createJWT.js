const jwt = require('jsonwebtoken');

let duration = 25 * 365.25 * 24 * 60 * 60;

let token = jwt.sign({ 
	iss: 'jwt-tutorial', 
	sub: 'USER_ID', 
	exp: Math.floor(Date.now() / 1000) + duration,
	roles: ['student']
}, 'cb098a48b008625b7e829ffd2f301f669a1a6873c58a7ad9bd18fb6e5280bbb2');

console.log('JWT :', token);
