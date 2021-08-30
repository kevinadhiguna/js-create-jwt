FROM node:14-alpine

WORKDIR /app

COPY package.json .
RUN yarn --frozen-lockfile

COPY createJWT.js .

CMD ["yarn", "generate"]
