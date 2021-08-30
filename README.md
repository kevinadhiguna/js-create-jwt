# JavaScript - Create JWT

🔑 A JavaScript program to create a JSON Web Token (JWT), powered by [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) library.

## How to Run

1) Clone this repository : <br/>
```
git clone https://github.com/kevinadhiguna/js-create-jwt
```
<br/>

2) Install dependencies : <br/>
```
yarn
```
or
```
npm install
```
<br/>

3) Create environment variables (`.env` file) by copying `.env.example` file :
```
cp .env.example .env
```
<br/>

4) Generate secret and put it into `.env` file :
```
openssl rand 64 | base64 # (linux/macOS users)
```
or
```
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" # (all users)
```

<br/>

5) Generate a new JWT : <br/>
```
yarn generate
```
or
```
npm run generate
```

The result will look like this : <br/><br/>
<img src="https://s9.gifyu.com/images/generate-jwt.png" alt="generate-jwt.png" border="0" />

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/js-create-jwt)](https://github.com/kevinadhiguna)
