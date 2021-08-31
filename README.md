# JavaScript - Create JWT

🔑 A JavaScript program to create a JSON Web Token (JWT), powered by [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) library.

## How to Run:

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

<hr/>
<br/>

## How to Run (using Docker):

You can either choose to build docker image by yourself or pull the docker image from DockerHub.

If you want to build docker image:
1) Clone this repository : <br/>
```
git clone https://github.com/kevinadhiguna/js-create-jwt
```

2) Build the docker image : <br/>
```
docker build -t js-jwt .
```

Note: you can replace `js-jwt` with docker image name that you want.

3) Generate secret : <br/>
```
openssl rand 64 | base64 # (linux/macOS users)
```
or
```
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" # (all users)
```

Copy the result (secret) so that you can paste it as `JWT_SECRET` value in the next command.

4) Run the docker image : <br/><br/>
Let's say the secret is `w4KuiqUDzvjIFBA4jHpUfjAeOOCH1DHJOODHkGXBUYLtK0bnp26GDM6WQvRUZtu2pgp3WiL5oFgz6XoSN7Q4VA==`. Then pass it as the `JWT_SECRET` value.
```
docker run -e JWT_SECRET=w4KuiqUDzvjIFBA4jHpUfjAeOOCH1DHJOODHkGXBUYLtK0bnp26GDM6WQvRUZtu2pgp3WiL5oFgz6XoSN7Q4VA== js-jwt
```

The command above should give you result like this : <br/><br/>
<img src="https://s9.gifyu.com/images/docker-generate-jwt.png" alt="docker-generate-jwt.png" border="0" />

<hr/>
<br/>

## How to Run (pull from DockerHub):

If you want to pull the docker image from DockerHub, here are the steps:
1) Pull the docker image:<br/>
```
docker pull kevinadhiguna/js-create-jwt:latest
```

2) Generate secret : <br/>
```
openssl rand 64 | base64 # (linux/macOS users)
```
or
```
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" # (all users)
```

Copy the result (secret) so that you can paste it as `JWT_SECRET` value in the next command.

3) Run the docker image : <br/><br/>
Let's say the secret is `w4KuiqUDzvjIFBA4jHpUfjAeOOCH1DHJOODHkGXBUYLtK0bnp26GDM6WQvRUZtu2pgp3WiL5oFgz6XoSN7Q4VA==`. Then pass it as the `JWT_SECRET` value.
```
docker run -e JWT_SECRET=w4KuiqUDzvjIFBA4jHpUfjAeOOCH1DHJOODHkGXBUYLtK0bnp26GDM6WQvRUZtu2pgp3WiL5oFgz6XoSN7Q4VA== js-jwt
```

Unfortunately, currently the image from DockerHub has not fully passed tests yet...

<!--
The command above should give you result like this : <br/><br/>
<img src="https://s9.gifyu.com/images/docker-generate-jwt.png" alt="docker-generate-jwt.png" border="0" />
<br/>
-->

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/js-create-jwt)](https://github.com/kevinadhiguna)
