<br />
<div align="center">
  <h2 align="center">JavaScript - Create JWT 🔑</h2>

  <p align="center">
    A JavaScript program to create a JSON Web Token (JWT), powered by <a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a> library.
  </p>
</div>

<div align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img alt="JSON Web Token" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</div>

<br/>

## 📚 Table of Contents

1. [🧐 What is JWT ?](#-what-is-jwt-)
2. [⚙️ Prerequisites](#%EF%B8%8F-prerequisites)
3. [🧶 How to Run (using `Yarn`)](#-how-to-run-using-yarn)
4. [🐋 How to Run (using `Docker`)](#-how-to-run-using-docker)
5. [🌊 How to Run (pull from DockerHub)](#-how-to-run-pull-from-dockerhub)
6. [🐳 How to Run (using `docker-compose`)](#-how-to-run-using-docker-compose)

<br/>

## 🧐 What is JWT ?

JWT stands for JSON Web Token that is used **to authenticate a user/session** to backend services and also to authenticate between backend services.
<br/>
<br/>
A JWT consists of three parts:
1) Header (Metadata of JWT which are usually encoding algorithm and token type)
2) Payload (Data that are encoded in JWT, do not store any sensitive data)
3) Signature (A random string that is generated by Header + Payload + Secret)

The signing algorithm which is usually HS256, utilizes the header, the payload, and the secret to generate a string named signature. The figure below illustrates the signing process :
<br/>
<br/>
![JWT-signing-process](https://user-images.githubusercontent.com/43397636/131616759-9b8671b3-bdb6-4cb0-a77d-f7c31770e5e0.png)
<br/>
(image from : [StackOverflow - What is secret key for JWT based authentication and how to generate it?](https://stackoverflow.com/questions/31309759/what-is-secret-key-for-jwt-based-authentication-and-how-to-generate-it))

In the server-side which stores the secret (used to generate a signature), the JWT verification process occurrs. The figure below gives an illustration :
<br/>
<br/>
![JWT-verification-process](https://user-images.githubusercontent.com/43397636/131617109-7973a771-7045-4419-ae7e-300d986baa20.png)
<br/>
(image from : [StackOverflow - What is secret key for JWT based authentication and how to generate it?](https://stackoverflow.com/questions/31309759/what-is-secret-key-for-jwt-based-authentication-and-how-to-generate-it))

The JWT from the client is decoded to a header and a paylaod. Then both of them are combined with the secret in the server-side to geenrate a test signature. As a result, if test siganture matches the original signature that comes within the JWT from the client, it is verified succesfully which means the JWT is valid. Otherwise, it's invalid and data probably have been modified.

References :
- [Lovia - JSON Web Token](https://about.lovia.life/docs/engineering/lovia-system-architecture/jwt/)
- [StackOverflow - What is secret key for JWT based authentication and how to generate it?](https://stackoverflow.com/questions/31309759/what-is-secret-key-for-jwt-based-authentication-and-how-to-generate-it)

<br/>

## ⚙️ Prerequisites

Prerequisites means what you should prepare/have before diving into a project. You should have [NodeJS](https://nodejs.org/en/) installed in your laptop/computer.

This project was created and tested using NodeJS v14.17.5. Hence, NodeJS version 14.17.5 or above should work.

<br/>

## 🧶 How to Run (using `Yarn`):

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

## 🐋 How to Run (using `Docker`):

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

## 🌊 How to Run (pull from DockerHub):

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
docker run -e JWT_SECRET=w4KuiqUDzvjIFBA4jHpUfjAeOOCH1DHJOODHkGXBUYLtK0bnp26GDM6WQvRUZtu2pgp3WiL5oFgz6XoSN7Q4VA== kevinadhiguna/js-create-jwt:latest
```

The command above should give you result like this : <br/><br/>
<img src="https://s9.gifyu.com/images/docker-generate-jwt-2.png" alt="docker-generate-jwt-2.png" border="0" />

<hr/>
<br/>

## 🐳 How to Run (using `docker-compose`):

1) Clone this repository : <br/>
```
git clone https://github.com/kevinadhiguna/js-create-jwt
```

2) Generate secret : <br/>
```
openssl rand 64 | base64 # (linux/macOS users)
```
or
```
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" # (all users)
```

Copy the result (secret) so that you can paste it as `JWT_SECRET` value in `.env` file.

4) Run docker-compose : <br/>
```
docker-compose up
```

The command above should give you result like this : <br/><br/>
<img src="https://s9.gifyu.com/images/dc.png" alt="docker-compose-generate-jwt.png" border="0" />

Eventually, if you want to remove the docker container created from the command above, you can run `docker-compose down`. It also deletes the docker network. <br/><br/>
<img src="https://s9.gifyu.com/images/dc-2.png" alt="dc-2.png" border="0" />

<br/>

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/js-create-jwt)](https://github.com/kevinadhiguna)
